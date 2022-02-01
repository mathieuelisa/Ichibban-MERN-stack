import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addingCart } from "../redux/actions/cartActions";

function Cart() {
  const productId = useParams();
  const { id } = productId;

  const location = useLocation();
  const dispatch = useDispatch();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  console.log(qty);
  console.log(id);
  console.log(productId);

  useEffect(() => {
    if (id) {
      dispatch(addingCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return (
    <>
      <h2>Cart page !!! {id}</h2>
    </>
  );
}

export default Cart;
