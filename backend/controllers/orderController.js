import asyncHandler from "express-async-handler";
// Models
import Order from "../../frontend/src/Pages/Order";

const orderController = {
  // Add a new order
  addingOrder: asyncHandler(async (req, res) => {
    const {
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
    } else {
      const order = new Order({
        user: req.user._id,
        cartItems,
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
};

export default orderController;
