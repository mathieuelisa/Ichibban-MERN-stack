import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// MongoDB connection
import connectDB from "./config/db.js";

// Models
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";

// Datas
import users from "./data/users.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const defineUser = await User.insertMany(users);
    const adminUserId = defineUser[0]._id;
    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUserId };
    });

    await Product.insertMany(sampleProduct);

    console.log("Congrat's your data have been imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Erreur: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Your data have been deleted".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Erreur: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
