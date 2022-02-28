import express from "express";
import orderController from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, orderController.addingOrder);
router.get("/:id", protect, orderController.getOrderById);

export default router;
