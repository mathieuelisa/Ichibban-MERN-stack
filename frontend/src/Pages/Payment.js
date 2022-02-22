import { useState } from "react";
import Steps from "../Components/Steps";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit payment form");
  };

  console.log(paymentMethod);
  return (
    <div className="payment__container">
      <Steps step1 step2 step3 />
      <div className="shipping__container-customer">
        <h2>PAYMENT PAGE</h2>
        <div className="shipping__container-customer-form">
          <form className="shipping__form" onSubmit={handleSubmit}>
            <label className="shipping__form-label">
              <input
                type="radio"
                value={"Paypal"}
                name="methodPayment"
                className="shipping__form-inputs"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              Paypal
            </label>

            <label className="shipping__form-label">
              <input
                type="radio"
                value={"Stripe"}
                name="methodPayment"
                className="shipping__form-inputs"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              Stripe
            </label>

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
