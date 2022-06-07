//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { MenuModel, ImageModel } from "../../database/allModels";

//Validation
import { ValidateMenuId } from "../../Validation/menu";

const Router = express.Router();

// Route           /list
// Descriptions    Get all menu based on id
// params          _id
// Access          Public
// Methode         GET

Router.get("/list/:_id", async (req, res) => {
  try {
    await ValidateMenuId(req.params);
    const { _id } = req.params;
    const menus = await MenuModel.findOne(_id);
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Route           /image
// Descriptions    Get all menu images based on id
// params          _id
// Access          Public
// Methode         GET

Router.get("/image/:_id", async (req, res) => {
    try {
      await ValidateMenuId(req.params);
      const { _id } = req.params;
      const menus = await ImageModel.findOne(_id);
      return res.json({ menus });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


export default Router;  