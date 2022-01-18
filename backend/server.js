const express = require("express");
const app = express();
const products = require("./data/products");

// Get all the products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get one products
app.get("/api/:id", (req, res) => {
  res.json(products.filter((product) => product._id === req.params.id));
});

app.listen(5000, () => {
  console.log(`Running app on port 5000`);
});
