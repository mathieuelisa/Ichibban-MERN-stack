import express from "express";
import userController from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// All my routes
router.post("/login", userController.authUser);
router.get("/profile", protect, userController.getUserById);

export default router;
