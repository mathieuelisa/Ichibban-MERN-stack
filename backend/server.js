import express from "express";
import colors from "colors";
import products from "./data/products.js";
import dotenv from "dotenv";
// Config mongoose
import connectDB from "./config/db.js";

import router from "./Routes/productRoutes.js";
import pageNotFound from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use("/api/products", router);
app.use(pageNotFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Running application in ${process.env.DEV} on port ${PORT}`.green.bold
  );
});
