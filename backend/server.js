import express from "express";
import colors from "colors";
import products from "./data/products.js";
import dotenv from "dotenv";
// Config mongoose
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
// Get all the products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get one products
app.get("/api/products/:id", (req, res) => {
  res.json(products.filter((product) => product._id === req.params.id));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Running application in ${process.env.DEV} on port ${PORT}`.green.bold
  );
});
