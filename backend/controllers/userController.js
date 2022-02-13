import asyncHandler from "express-async-handler";

// Models
import User from "../models/userModel.js";

import generateToken from "../utils/usersJsonWebToken.js";

const userController = {
  // Auth user and get the token
  // POST request
  authUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Une petite erreur...");
    }
  }),

  // Register a new user
  // POST request
  registerUser: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400);
      throw new Error("User already existing");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("No user data ");
    }
  }),

  // Get user profile
  // GET request
  getUserById: asyncHandler(async (req, res) => {
    let user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found sorry...");
    }
  }),
};

export default userController;
