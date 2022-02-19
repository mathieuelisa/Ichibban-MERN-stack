import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartActions";

const addingCartTest = (value) => ({
  type: CART_ADD_ITEM,
  value,
});

const deleteCartTest = (value) => ({
  type: CART_REMOVE_ITEM,
  value,
});

describe("TESTING CARTS", () => {
  test("Should create a cart", () => {
    const value = "new cart";
    const action = {
      type: CART_ADD_ITEM,
      value,
    };
    expect(addingCartTest(value)).toEqual(action);
  });

  test("Should delete a card", () => {
    const value = "delete card";
    const action = {
      type: CART_REMOVE_ITEM,
      value,
    };
    expect(deleteCartTest(value)).toEqual(action);
  });
});
