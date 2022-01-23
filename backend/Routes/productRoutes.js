import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// Get all the products
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get one products
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(400).json({ err: "Your products is not found sorry" });
  }
});

export default router;
