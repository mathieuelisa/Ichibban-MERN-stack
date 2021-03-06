import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addingCart, removeCart } from "../redux/actions/cartActions";

import ErrorMessage from "../Components/ErrorMessage";
import emptyCart from "../Assets/Images/emptyCard.png";

function Cart() {
  const productId = useParams();
  const { id } = productId;

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.Cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addingCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const removeItem = (id) => {
    dispatch(removeCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <div className="cart__container">
      <div className="cart__container-wrapperProduct">
        <div className="cart__container-wrapperProduct-mainTitle">
          <div>
            <h2 className="cart__container-title">Votre panier</h2>
          </div>
          <div className="cart__container-totalContainer">
            <h3 className="cart__container-wrapperTotal-title">
              Sous-total{" "}
              {cartItems
                .reduce(
                  (acc, element) => acc + element.quantity * element.price,
                  0
                )
                .toFixed(2)}{" "}
              €
            </h3>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <>
            <ErrorMessage className="cart__container-error">
              <img
                src={emptyCart}
                className="cart__container-emptyCard"
                alt="empty"
              />
              Pas de produits dans votre panier...
            </ErrorMessage>
            <Link to={"/"} className="cart__redirect-home">
              Retour vers l'accueil
            </Link>
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
                      <i
                        className="fas fa-trash-alt"
                        style={{ color: "grey" }}
                        onClick={() => removeItem(element.product)}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="cart__container-wrapperTotal">
          <div className="cart__container-checkoutButton">
            <button
              type="submit"
              className="product__container-button-valide"
              onClick={checkoutHandler}
            >
              FINALISER LA COMMANDE DE{" "}
              {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} PRODUITS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
