import asyncHandler from "express-async-handler";

// Models
import Product from "../models/productModel.js";

const productsController = {
  // Get all the products
  // GET request
  getProducts: asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }),

  // Get one product by ID
  //GET request
  // ADMIN
  getProductById: asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Your products is not found sorry" });
    }
  }),

  // Delete product
  // DELETE request
  // ADMIN
  deleteProduct: asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.json({ message: "Product removed" });
    } else {
      res.status(404);
      throw new Error("Problem with removing products...");
    }
  }),

  // Create product
  // POST request
  // ADMIN
  createProduct: asyncHandler(async (req, res) => {
    const product = await Product.create({
      user: req.user._id,
      name: "Nom du produit",
      image: "/images/sample.jpg",
      description: "Description",
      brand: "Marque",
      category: "Categorie",
      price: 0,
      countInStock: 0,
      numReviews: 0,
    });

    const createdProduct = await product.save();
    if (createdProduct) {
      res.json(createdProduct);
    } else {
      res.status(404);
      throw new Error("Product not created...");
    }
  }),

  // Update product
  // PUT request
  // ADMIN
  updateProduct: asyncHandler(async (req, res) => {
    const {
      name,
      user,
      image,
      description,
      brand,
      category,
      price,
      countInStock,
      numReviews,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name;
      product.user = user;
      product.image = image;
      product.description = description;
      product.brand = brand;
      product.category = category;
      product.price = price;
      product.countInStock = countInStock;
      product.numReviews = numReviews;

      const updatedProduct = await product.save();

      res.json({ updatedProduct });
    } else {
      res.status(404);
      throw new Error("Product not found sorry...");
    }
  }),
};

export default productsController;
