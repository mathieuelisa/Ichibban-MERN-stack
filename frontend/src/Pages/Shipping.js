import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Steps from "../Components/Steps";
import { saveShippingAddress } from "../redux/actions/cartActions";

function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <>
      <Steps step1 step2 />
      <div className="shipping__container">
        <div className="shipping__container-customer">
          <h2>SHIPPING ADDRESS</h2>
          <div className="shipping__container-customer-form">
            <form className="shipping__form" onSubmit={handleSubmit}>
              <label className="shipping__form-label">
                <input
                  type="text"
                  name="address"
                  value={address}
                  required
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
                  required
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
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="CODE POSTAL"
                  className="shipping__form-inputs"
                />
              </label>

              <label className="shipping__form-label">
                {/* <input
                type="text"
                name="country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
                placeholder="PAYS"
                className="shipping__form-inputs"
              /> */}
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="shipping__form-inputs"
                >
                  <option value="France">FRANCE</option>
                  <option value="UK">ROYAUME UNIS</option>
                  <option value="Italy">ITALIE</option>
                  <option value="Espagne">ESPAGNE</option>
                  <option value="Allemagne">ALLEMAGNE</option>
                  <option value="Irlande">IRLANDE</option>
                </select>
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
    </>
  );
}

export default Shipping;
