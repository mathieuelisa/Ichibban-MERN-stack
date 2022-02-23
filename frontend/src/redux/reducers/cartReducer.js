import {
  CART_ADD_ITEM,
  CART_METHOD_PAYMENT_SAVE,
  CART_REMOVE_ITEM,
  CART_SHIPPING_ADDRESS_SAVE,
} from "../actions/cartActions";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, paymentMethod: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (element) => element.product === item.product
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((element) =>
            element.product === existingItem.product ? item : element
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (element) => element.product !== action.payload
        ),
      };
    case CART_SHIPPING_ADDRESS_SAVE:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_METHOD_PAYMENT_SAVE:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
