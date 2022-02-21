import axios from "axios";

// Actions type add and remove items
export const CART_ADD_ITEM = "cart_add_item";
export const addingCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};

export const CART_REMOVE_ITEM = "cart_remove_item";
export const removeCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};

// Actions type for save address shipping
export const CART_SHIPPING_ADDRESS_SAVE = "cart_shipping_address_save";
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SHIPPING_ADDRESS_SAVE,
    payload: data,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};
