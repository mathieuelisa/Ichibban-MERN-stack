import { useState } from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit form");
};

function Shipping() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="login__container">
      <div className="shipping__container-customer">
        <h2>SHIPPING ADRESS</h2>
        <div className="shipping__container-customer-form">
          <form className="shipping__form" onSubmit={handleSubmit}>
            <label className="shipping__form-label">
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="ADRESSE"
                className="shipping__form-inputs"
              />
            </label>

            <label className="shipping__form-label">
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="VILLE"
                className="shipping__form-inputs"
              />
            </label>

            <label className="shipping__form-label">
              <input
                type="number"
                name="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="CODE POSTAL"
                className="shipping__form-inputs"
              />
            </label>

            <label className="shipping__form-label">
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="PAYS"
                className="shipping__form-inputs"
              />
            </label>

            <button
              type="submit"
              className="product__container-button-valide"
              onClick={handleSubmit}
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
