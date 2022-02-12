import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let myToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      myToken = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(myToken, process.env.SECRET_KEY_JWT);

      req.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      res.status(401);
      throw new Error("Token failed sorry...");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No token, no authorized !");
  }

  next();
});

export { protect };
