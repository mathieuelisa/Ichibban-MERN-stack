import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Components
import ErrorMessage from "../Components/ErrorMessage";
import Loader from "../Components/Loader";
import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";
// Actions
import { getOrderDetail, payOrder } from "../redux/actions/orderActions";
import { ORDER_PAY_RESET } from "../redux/actions/orderActions";
// Paypal Button
import { PayPalButton } from "react-paypal-button-v2";

function OrderDetails() {
  const [sdkPaypalReady, setSdkPaypalReady] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const orderDetail = useSelector((state) => state.DetailOrder);
  const { order, loading, error } = orderDetail;

  const orderPay = useSelector((state) => state.OrderPay);
  const { success: successPay, loading: loadingPay } = orderPay;

  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
  }

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkPaypalReady(true);
      };

      document.body.appendChild(script);
    };

    if (!order || successPay || order._id !== id) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetail(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkPaypalReady(true);
      }
    }
  }, [order, id, dispatch, successPay]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(id, paymentResult));
  };

  const handleDeliveredOrder = () => {
    console.log("Votre produits a bien ete livré");
  };

  return loading ? (
    <Loader
      className="homepage__loading"
      src={loadingLogo}
      logoClassName="homepage__logo"
    />
  ) : error ? (
    <ErrorMessage>Une petite erreur est survenue</ErrorMessage>
  ) : (
    <>
      <div className="order__container">
        <div className="order__container_twoParts">
          <div className="order__container-mainTitle">
            <div className="order__container-parts-articles">
              <h2 className="order__container-parts-articles-title">
                Votre numéro de commande : {order._id}
              </h2>
              <div className="order__container_elements">
                {order.orderItems.map((element, index) => {
                  return (
                    <div className="order__container_elements-each" key={index}>
                      <img
                        src={element.image}
                        className="order__container-image"
                        alt="EachProduct"
                      ></img>
                      <a
                        href={`/product/${element.product}`}
                        className="order__container-nameOfProduct"
                      >
                        {element.name}
                      </a>
                      <h3>
                        {element.quantity} x {element.price} € ={" "}
                        {element.quantity * element.price} €
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order__container-parts-shipping">
              <div className="order__container-parts-delivery">
                <h4>Votre adresse de livraison :</h4>
                {order.isDelivered ? (
                  <ErrorMessage
                    className="order__description-paid"
                    textClassName="greenError"
                  >
                    Commande delivrée
                  </ErrorMessage>
                ) : (
                  <ErrorMessage
                    textClassName="redError"
                    className="order__description-paid"
                  >
                    Commande non delivrée
                  </ErrorMessage>
                )}
              </div>
              <div className="order__container_elements-shipping">
                <div className="order__container_elements-nameAndEmail">
                  <h4 className="order__container-parts-shipping-title">
                    {order.user.name.replace(/\b\w/g, (c) => c.toUpperCase())}
                  </h4>
                  <a
                    href={`mailto:${order.user.email}`}
                    className="anchor__orderDetails"
                  >
                    <h4 className="order__container-parts-shipping-title-email">
                      {order.user.email}
                    </h4>
                  </a>
                </div>
                <h4 className="order__container-parts-shipping-title">
                  {order.shippingAddress.address}
                </h4>
                <h4 className="order__container-parts-shipping-title">
                  {order.shippingAddress.city}
                </h4>
                <h4 className="order__container-parts-shipping-title">
                  {order.shippingAddress.postalCode}
                </h4>
                <h4 className="order__container-parts-shipping-title">
                  {order.shippingAddress.country}
                </h4>
              </div>
            </div>

            <div className="order__container-parts-paymentMethod">
              <h4>Mode de paiement choisi :</h4>
              <h4 className="order__container-parts-paymentMethod-title">
                {order.paymentMethod}
              </h4>
              {order.isPaid ? (
                <>
                  <ErrorMessage
                    className="order__description-paid"
                    textClassName="greenError"
                  >
                    Commande payée {order.paidAt}
                  </ErrorMessage>
                </>
              ) : (
                <ErrorMessage
                  textClassName="redError"
                  className="order__description-paid"
                >
                  Commande non payée
                </ErrorMessage>
              )}
            </div>
          </div>
          <div className="order__container_summary">
            <h3 className="order__container_summary-mainTitle">
              Résumé de votre commande
            </h3>
            <div className="order__container_summary-title">
              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">
                  Total des articles HT
                </h4>

                <h4 className="order_results">{order.itemsPrice} €</h4>
              </div>

              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">
                  Frais de livraison
                </h4>
                <h4 className="order_results">{order.shippingPrice} €</h4>
              </div>

              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">TVA</h4>
                <h4 className="order_results">{order.taxPrice} €</h4>
              </div>

              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">
                  TOTAL TTC
                </h4>
                <h4 className="order_results">{order.totalPrice} €</h4>
              </div>

              {!order.isPaid && (
                <>
                  {loadingPay && <LoaderSpinner />}
                  {!sdkPaypalReady ? (
                    <LoaderSpinner />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </>
              )}

              {userInformation && userInformation.isAdmin && (
                <button
                  onClick={handleDeliveredOrder}
                  className="product__container-button-valide"
                >
                  Produit delivré
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
