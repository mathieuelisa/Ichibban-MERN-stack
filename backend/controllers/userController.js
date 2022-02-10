import asyncHandler from "express-async-handler";

// Models
import User from "../models/userModel.js";

const userController = {
  authUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("Une petite erreur...");
    }
  }),
};

export default userController;
