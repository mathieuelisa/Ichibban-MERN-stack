import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Steps from "../Components/Steps";
import { removeCart } from "../redux/actions/cartActions";

function Order() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  //   Get total HT
  cart.totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  //   Get taxes
  cart.totalTVA = Number((0.2 * cart.totalPrice).toFixed(2));
  // Get delivery cost
  cart.totalDelivery = cart.totalPrice < 700 ? 90 : 0;
  //   Get total TTC
  cart.totalResume = cart.totalPrice + cart.totalDelivery + cart.totalTVA;

  const orderHandlerSubmit = (e) => {
    e.preventDefault();
    console.log("order selected");
  };

  const removeItem = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <>
      <Steps step1 step2 step3 step4 />
      <div className="order__container">
        <div className="order__container_twoParts">
          <div className="order__container-mainTitle">
            <div className="order__container-parts-articles">
              <h4>Liste des articles selectionnés :</h4>
              <div className="order__container_elements">
                {cartItems.map((element, index) => {
                  return (
                    <div className="order__container_elements-each" key={index}>
                      <img
                        src={element.image}
                        className="order__container-image"
                        alt="EachProduct"
                      ></img>
                      <Link
                        to={`/product/${element.product}`}
                        className="order__container-nameOfProduct"
                      >
                        {element.name}
                      </Link>
                      <h3>
                        {element.quantity} x {element.price} € ={" "}
                        {element.quantity * element.price} €
                      </h3>
                      <div className="cart__element-wrapper-delete">
                        <i
                          className="fas fa-trash-alt"
                          onClick={() => removeItem(element.product)}
                        ></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order__container-parts-shipping">
              <h4>Votre adresse de livraison :</h4>
              <div className="order__container_elements-shipping">
                <h4 className="order__container-parts-shipping-title">
                  {shippingAddress.address}
                </h4>
                <h4 className="order__container-parts-shipping-title">
                  {shippingAddress.city}
                </h4>
                <h4 className="order__container-parts-shipping-title">
                  {shippingAddress.postalCode}
                </h4>
                <h4 className="order__container-parts-shipping-title">
                  {shippingAddress.country}
                </h4>
              </div>
            </div>

            <div className="order__container-parts-paymentMethod">
              <h4>Votre methode de paiement :</h4>
              <h4 className="order__container-parts-paymentMethod-title">
                {paymentMethod}
              </h4>
            </div>
          </div>
          <div className="order__container_summary">
            <h3>Resume de votre commande</h3>
            <div className="order__container_summary-title">
              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">
                  Total des articles HT
                </h4>

                <h4 className="order_results">{cart.totalPrice} €</h4>
              </div>

              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">
                  Frais de livraison
                </h4>
                <h4 className="order_results">{cart.totalDelivery} €</h4>
              </div>

              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">TVA</h4>
                <h4 className="order_results">{cart.totalTVA} €</h4>
              </div>

              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">
                  TOTAL TTC
                </h4>
                <h4 className="order_results">{cart.totalResume} €</h4>
              </div>

              <button
                type="submit"
                className="order__container-button-valide"
                onClick={orderHandlerSubmit}
              >
                CONTINUER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
