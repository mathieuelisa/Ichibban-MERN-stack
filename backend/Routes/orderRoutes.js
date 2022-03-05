import express from "express";
import orderController from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, orderController.addingOrder);
router.get("/", orderController.getAllOrder);
router.get("/myorders", protect, orderController.getMyOrders);
router.get("/:id", protect, orderController.getOrderById);
router.put("/:id/pay", protect, orderController.updateOrderPaid);

export default router;
