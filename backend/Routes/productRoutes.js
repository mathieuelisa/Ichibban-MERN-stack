import express from "express";
import productsController from "../controllers/productController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdminMiddleware.js";

const router = express.Router();

// All my routes
router.get("/", productsController.getProducts);
router.get("/bestproducts", productsController.getBestProducts);
router.get("/:id", productsController.getProductById);

router.post("/", protect, isAdmin, productsController.createProduct);
router.delete("/:id", protect, isAdmin, productsController.deleteProduct);
router.put("/:id", protect, isAdmin, productsController.updateProduct);

router.post("/:id/reviews", protect, productsController.createReviews);

export default router;
