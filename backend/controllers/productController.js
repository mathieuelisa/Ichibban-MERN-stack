import asyncHandler from "express-async-handler";

// Models
import Product from "../models/productModel.js";

const productsController = {
  // Get all the products
  // GET request
  getProducts: asyncHandler(async (req, res) => {
    const search = req.query.search;

    const mySearching = search
      ? {
          name: {
            $regex: search,
            $options: "i",
          },
        }
      : {};

    const products = await Product.find({ ...mySearching });
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
      name: "Veuillez ajouter le nom du produit",
      image: "/images/sample.jpg",
      description: "Veuillez ajouter une description",
      brand: "Veuillez ajouter la marque",
      category: "Veuillez ajouter la categorie",
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

  // Create reviews
  // POST request
  // ADMIN
  createReviews: asyncHandler(async (req, res) => {
    const { comment, rating } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      const reviewsAlreadyThere = product.reviews.find(
        (element) => element.user === req.user._id
      );

      if (reviewsAlreadyThere) {
        res.status(400);
        throw new Error("Error because you already written a review");
      }

      const review = {
        comment,
        rating: Number(rating),
        user: req.user._id,
        name: req.user.name,
      };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();

      res.status(201).json({ message: "Reviews created" });
    } else {
      res.status(400);
      throw new Error("Error product not found");
    }
  }),
};

export default productsController;
