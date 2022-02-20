import { Link } from "react-router-dom";

const handleSubmit = () => {
  console.log("submit form");
};

function Shipping() {
  return (
    <div className="login__container">
      <div className="register__container-customer">
        <h2>SHIPPING ADRESS</h2>
        <div className="register__container-customer-form">
          <form className="register__form" onSubmit={handleSubmit}>
            <label className="register__form-label">
              <input
                type="text"
                name="adress"
                // value={}
                // onChange={handleChange}
                placeholder="ADRESSE"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="text"
                name="city"
                // value={}
                // onChange={handleChange}
                placeholder="VILLE"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="number"
                name="postalCode"
                // value={}
                // onChange={handleChange}
                placeholder="CODE POSTAL"
                className="register__form-inputs"
              />
            </label>

            <label className="register__form-label">
              <input
                type="text"
                name="country"
                // value={}
                // onChange={handleChange}
                placeholder="PAYS"
                className="register__form-inputs"
              />
            </label>

            <Link to={"/confirmPayment"}>CONTINUE</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
