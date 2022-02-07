import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
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

  const removeItem = () => {
    console.log("Object removed");
  };

  console.log(cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addingCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  return (
    <div className="cart__container">
      <div className="cart__container-wrapperProduct">
        <h2 className="cart__container-title">Votre panier</h2>
        {cartItems.length === 0 ? (
          <>
            <ErrorMessage className="cart__container-error">
              Pas de produits dans votre panier...
              <Link to={"/"} className="cart__redirect-home">
                Retour vers l'accueil
              </Link>
            </ErrorMessage>
          </>
        ) : (
          <div className="carts__global-wrapper">
            <div className="carts__container">
              {cartItems.map((element, index) => {
                return (
                  <div className="cart__element-wrapper" key={index}>
                    <div className="cart__element-wrapper-image">
                      <img
                        src={element.image}
                        className="cart-image"
                        alt="eachProduct"
                      />
                    </div>

                    <div className="cart__element-wrapper-name">
                      <p>{element.name}</p>
                    </div>

                    <div className="cart__element-wrapper-price">
                      <p>{element.price} €</p>
                    </div>

                    <form className="product__quantity">
                      <select
                        className="product__select"
                        value={element.quantity}
                        onChange={(e) =>
                          dispatch(
                            addingCart(element.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(element.countInStock).keys()].map(
                          (quantity) => (
                            <option key={quantity + 1} value={quantity + 1}>
                              {quantity + 1}
                            </option>
                          )
                        )}
                      </select>
                    </form>

                    <div className="cart__element-wrapper-delete">
                      <i className="fas fa-trash-alt" onClick={removeItem}></i>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart__container-wrapperTotal">
              <h3 className="cart__container-wrapperTotal-title">
                TOTAL ({cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                ) PRODUITS
              </h3>
              <h2 className="cart__container-wrapperTotal-secondTitle">
                {cartItems
                  .reduce(
                    (acc, element) => acc + element.quantity * element.price,
                    0
                  )
                  .toFixed(2)}{" "}
                €
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
