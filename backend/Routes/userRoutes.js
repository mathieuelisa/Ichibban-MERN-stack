import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

// All my routes
router.post("/login", userController.authUser);

export default router;
