import asyncHandler from "express-async-handler";

// Models
import Order from "../models/orderModel.js";
const orderController = {
  // Add a new order
  addingOrder: asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No items founds, sorry");
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
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
