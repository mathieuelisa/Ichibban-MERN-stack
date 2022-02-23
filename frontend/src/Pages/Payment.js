import { useState } from "react";
import Steps from "../Components/Steps";
import logoPaypal from "../Assets/Images/paypal.png";
import logoStripe from "../Assets/Images/stripe.svg";
import { useDispatch } from "react-redux";
import { saveMethodPayment } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit payment form");
    dispatch(saveMethodPayment(paymentMethod));
    navigate("/order");
  };

  console.log(paymentMethod);
  return (
    <div className="payment__container">
      <Steps step1 step2 step3 />
      <div className="payment__container-customer">
        <h2 className="payment__mainTitle">PAYMENT METHOD</h2>
        <div className="shipping__container-customer-form">
          <form className="payment__form" onSubmit={handleSubmit}>
            <div className="payment__form-paypalContainer">
              <label className="payment__form-label">
                <input
                  type="radio"
                  value={"Paypal"}
                  name="methodPayment"
                  className="shipping__form-inputs"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                Paypal or Credit Card
              </label>
              <img
                src={logoPaypal}
                alt="paypalLogo"
                className="payment-logo-paypal"
              />
            </div>

            <div className="payment__form-stripeContainer">
              <label className="payment__form-label">
                <input
                  type="radio"
                  value={"Stripe"}
                  name="methodPayment"
                  className="shipping__form-inputs"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                Stripe
              </label>
              <img
                src={logoStripe}
                alt="stripeLogo"
                className="payment-logo-stripe"
              />
            </div>

            <button
              type="submit"
              className="product__container-button-valide"
              onClick={handleSubmit}
            >
              CONTINUER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
