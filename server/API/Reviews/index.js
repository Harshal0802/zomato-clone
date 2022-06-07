//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { ReviewModel } from "../../database/allModels";

//Validation
import {ValidateReviewId , ValidateReviewData} from "../../Validation/review";

const Router = express.Router();

/*
Route       /new
Desc        Add new food review/rating 
Params      none
Body        review object
Access      Public
Method      POST
*/

Router.post("/food/new", async (req, res) => {
  try {
    await ValidateReviewData(req.body);
    const { reviewData } = req.body;
    await ReviewModel.create(reviewData);
    return res.json({ review: "Successfully created review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /delete
Desc        delete food review/rating 
Params      _id
Body        none
Access      Public
Method      DELETE
*/

Router.delete("/delete/_id", async (req, res) => {
  try {
    await ValidateReviewId( req.params);
    const { _id} = req.params;
    await ReviewModel.findByIdAndDelete(_id);
    return res.json({ review: "Successfully deleted the review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
