import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../App.scss";

import Card from "../Components/Card";
import Loader from "../Components/Loader";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { bestProductsList } from "../redux/actions/productsActions.js";

import ErrorMessage from "../Components/ErrorMessage";
import { useNavigate } from "react-router-dom";

function BestProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BestProducts = useSelector((state) => state.BestProducts);
  const {
    loading: loadingTop,
    products: productsTop,
    error: errorTop,
  } = BestProducts;

  useEffect(() => {
    dispatch(bestProductsList());
  }, [dispatch]);

  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <div className="homepage__wrapper">
      <div className="userEdit__back">
        <h4 className="userEdit__back-title" onClick={handleBackButton}>
          Retour
        </h4>
      </div>
      <div className="homepage__wrapper-title">
        <h4>TOP 3</h4>
      </div>

      {loadingTop ? (
        <Loader
          className="homepage__loading"
          src={loadingLogo}
          logoClassName="homepage__logo"
        />
      ) : errorTop ? (
        <ErrorMessage className="homepage__errorMessage">
          Désolé une erreur s'est produite, veuillez reeasayer
        </ErrorMessage>
      ) : (
        <>
          <div className="homepage__container">
            {productsTop.map((productsTop, index) => (
              <Card key={index} product={productsTop} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BestProducts;
