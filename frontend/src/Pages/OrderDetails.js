// import { useEffect } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";
import LoaderSpinner from "../Components/LoaderSpinner";
import { getOrderDetail } from "../redux/actions/orderActions";

function OrderDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const orderDetail = useSelector((state) => state.DetailOrder);
  const { order, loading, error } = orderDetail;
  console.log(orderDetail);

  useEffect(() => {
    dispatch(getOrderDetail(id));
  }, [id, dispatch]);

  return loading ? (
    <LoaderSpinner />
  ) : error ? (
    <ErrorMessage>Une petite erreur est survenur</ErrorMessage>
  ) : (
    <>
      <div className="order__container">
        <div className="order__container_twoParts">
          <div className="order__container-mainTitle">
            <div className="order__container-parts-articles">
              <h2>Votre numero de commande : {order._id}</h2>
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
              <h4>Votre adresse de livraison :</h4>
              <div className="order__container_elements-shipping">
                <h4 className="order__container-parts-shipping-title">
                  {order.user.name}
                </h4>
                <h4 className="order__container-parts-shipping-title">
                  {order.user.email}
                </h4>
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
            </div>
          </div>
          <div className="order__container_summary">
            <h3>Resume de votre commande</h3>
            <div className="order__container_summary-title">
              <div className="order__container_summary-title-container">
                <h4 className="order__container_summary-secondTitle">
                  Total des articles HT
                </h4>

                <h4 className="order_results">{order.totalPrice} €</h4>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
