import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Steps from "../Components/Steps";

function Order() {
  const cart = useSelector((state) => state.Cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  return (
    <>
      <Steps step1 step2 step3 step4 />
      <div className="order__container">
        <h2 className="order__title">Resumé de votre commande</h2>
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
      </div>
    </>
  );
}

export default Order;
