import express from "express";
import userController from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdminMiddleware.js";

const router = express.Router();

// All my routes
router.get("/", protect, isAdmin, userController.getAllUsers);
router.post("/", userController.registerUser);
router.post("/login", userController.authUser);
router.get("/profil", protect, userController.getUserById);
router.put("/profil", protect, userController.updateUserById);
router.get("/:id", protect, isAdmin, userController.getUserProfilById);
router.put("/:id", protect, isAdmin, userController.updateUser);
router.delete("/:id", protect, isAdmin, userController.deleteUser);

export default router;
