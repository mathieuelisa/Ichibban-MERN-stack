import asyncHandler from "express-async-handler";

// Models
import Product from "../models/productModel.js";

const productsController = {
  // Get all the products
  getProducts: asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }),

  // Get one product by ID
  getProductById: asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Your products is not found sorry" });
    }
  }),
};

export default productsController;