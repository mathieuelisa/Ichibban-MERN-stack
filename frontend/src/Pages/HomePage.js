import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../App.scss";

import Card from "../Components/Card";
import Loader from "../Components/Loader";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { productList } from "../redux/actions/productsActions.js";

import ErrorMessage from "../Components/ErrorMessage";
import { useParams } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const { search } = useParams();

  const ListProducts = useSelector((state) => state.ListProducts);
  const { loading, products, error } = ListProducts;

  useEffect(() => {
    dispatch(productList(search));
  }, [dispatch, search]);

  return (
    <div className="homepage__wrapper">
      <div className="homepage__wrapper-title">
        <h5>Nos nouveautés</h5>
      </div>

      {loading ? (
        <Loader
          className="homepage__loading"
          src={loadingLogo}
          logoClassName="homepage__logo"
        />
      ) : error ? (
        <ErrorMessage className="homepage__errorMessage">
          Désolé une erreur s'est produite, veuillez reeasayer
        </ErrorMessage>
      ) : (
        <div className="homepage__container">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
