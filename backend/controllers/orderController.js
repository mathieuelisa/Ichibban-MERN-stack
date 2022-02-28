import asyncHandler from "express-async-handler";

// Models
import Order from "../models/orderModel.js";
const orderController = {
  // Add a new order
  addingOrder: asyncHandler(async (req, res) => {
    const {
      orderItems,
      cartItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      totalTVA,
      totalResume,
    } = req.body;

    if (cartItems && cartItems.length === 0) {
      res.status(400);
      throw new Error("No items founds, sorry");
      return;
    } else {
      const order = new Order({
        user: req.user._id,
        cartItems,
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
        totalTVA,
        totalResume,
      });

      const createdNewOrder = await order.save();

      res.status(201).json(createdNewOrder);
    }
  }),

  // Find an order with id
  getOrderById: asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (order) {
      res.json(order);
    } else {
      res
        .status(404)
        .json({ message: "Your order have been not found, sorry" });
    }
  }),
};

export default orderController;
