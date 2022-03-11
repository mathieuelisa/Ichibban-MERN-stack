import express from "express";
import productsController from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdminMiddleware.js";

const router = express.Router();

// All my routes
router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);

// A verifier pour delete product en admin
router.delete("/:id", protect, isAdmin, productsController.deleteProduct);

export default router;
