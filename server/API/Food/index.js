//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { FoodModel } from "../../database/allModels";

//Validation
import { ValidateCategory, ValidateRestaurantId } from "../../Validation/food";

const Router = express.Router();

// Route           /r
// Descriptions    Get all food based on particular restaurant
// params          id
// Access          Public
// Methode         GET

Router.get("/r/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Route           /c
// Descriptions    Get all food based on particular category
// params          category
// Access          Public
// Methode         GET

Router.get("/c/:category", async (req, res) => {
  try {
    await ValidateCategory(req.params);
    
    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
