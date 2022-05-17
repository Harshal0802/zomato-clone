//Library
import express from "express";
import bcrypt from "bcrypt"; //for hashing the password
import jwt from "jsonwebtoken"; //for jwt token

//Models
import { UserModel } from "../../database/allModels";

const Router = express.Router();

// Route           /signup
// Descriptions    register with email and password
// params          none
// Access          Public
// Methode         POST

Router.post("/signup", async (req, res) => {
  try {
    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);

    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Route           /signin
// Descriptions    SignUp with email and password
// params          none
// Access          Public
// Methode         POST

export default Router;
