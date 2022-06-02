//Library
import express from "express";
import bcrypt from "bcrypt"; //for hashing the password
import jwt from "jsonwebtoken"; //for jwt token
import passport from "passport";

//Models
import { UserModel } from "../../database/allModels";

//Validation
import { ValidateSignup, ValidateSignin } from "../../Validation/auth";

const Router = express.Router();

// Route           /signup
// Descriptions    register with email and password
// params          none
// Access          Public
// Methode         POST

Router.post("/signup", async (req, res) => {
  try {
     await ValidateSignup(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Route           /signin
// Descriptions    Signin with email and password
// params          none
// Access          Public
// Methode         POST

Router.post("/signin", async (req, res) => {
  try {
    await ValidateSignin(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);

    const token = user.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

// Route           /google/callback
// Descriptions    Google signin callback
// params          none
// Access          Public
// Methode         GET

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);

export default Router;
