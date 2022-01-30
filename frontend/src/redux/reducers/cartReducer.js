import { CART_ADD_ITEM } from "../actions/cartActions";

export const cartReducer = (state = { cartItems: [] }, action = {}) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (element) => element.product === item.product
      );

      if (existingItem) {
        return {
          ...state,
          cartItem: state.cartItems.map((element) =>
            element.product === existingItem.product ? item : element
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
