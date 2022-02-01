import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addingCart } from "../redux/actions/cartActions";

function Cart() {
  const productId = useParams();
  const { id } = productId;

  const location = useLocation();
  const dispatch = useDispatch();

  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.Cart);
  const { cartItems } = cart;

  console.log(cartItems);
  useEffect(() => {
    if (id) {
      dispatch(addingCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  return (
    <>
      <h2>Cart page !!! {id}</h2>
    </>
  );
}

export default Cart;
