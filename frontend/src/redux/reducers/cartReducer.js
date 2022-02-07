import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/cartActions";

export const cartReducer = (state = { cartItems: [] }, action) => {
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
      const removeItem = state.cartItems.filter(
        (element) => element.product !== item
      );

      return {
        ...state,
        cartItems: [...state.cartItems, removeItem],
      };
    default:
      return state;
  }
};
