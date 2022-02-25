import express from "express";
import colors from "colors";
import products from "./data/products.js";
import dotenv from "dotenv";
// Config mongoose
import connectDB from "./config/db.js";

// Routes
import productsRouter from "./Routes/productRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

import { pageNotFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api/products", productsRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// Page not found middleware
app.use(pageNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Running application in ${process.env.DEV} on port ${PORT}`.green.bold
  );
});
