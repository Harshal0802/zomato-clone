//Libraries
import express from "express";
import { get } from "mongoose";
import passport from "passport";

//Database Model
import { OrderModel } from "../../database/allModels";

const Router = express.Router();

// Route           /
// Descriptions    Get all order based on id
// params          _id
// Access          Public
// Methode         GET

Router.get("/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getOrder = await OrderModel.findOne({ user: _id });
    if (!getOrder) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ orders: getOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Route           /new
// Descriptions    add new order
// params          _id
// Access          Public
// Methode         POST

Router.post("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;
    const addNewOrder = await OrderModel.findOneAndUpdate(
      {
        user: _id,
      },
      {
        $push: { orderDetails }, //if the variable and value is same orderDetails: orderDetails
      },
      {
        new: true,
      }
    );
    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
