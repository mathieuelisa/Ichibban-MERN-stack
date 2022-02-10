import express from "express";
import productsController from "../controllers/productController.js";

const router = express.Router();

// All my routes
router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);

export default router;
