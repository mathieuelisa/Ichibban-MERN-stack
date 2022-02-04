import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addingCart } from "../redux/actions/cartActions";

import ErrorMessage from "../Components/ErrorMessage";

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
    <div className="cart__container">
      <div className="cart__container-wrapperProduct">
        <h2 className="cart__container-title">Liste de produits choisis</h2>
        {cartItems.length === 0 ? (
          <ErrorMessage className="cart__container-error" />
        ) : (
          <div>
            <p>rempli</p>
          </div>
        )}
      </div>

      <div className="cart__container-wrapperTotal">
        <h3 className="cart__container-wrapperTotal-title">
          TOTAL (3) PRODUITS
        </h3>
      </div>
    </div>
  );
}

export default Cart;
