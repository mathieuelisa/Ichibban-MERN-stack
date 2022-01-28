import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.scss";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { productList } from "../redux/actions/productsActions.js";

function HomePage() {
  const dispatch = useDispatch();

  const ListProducts = useSelector((state) => state.ListProducts);
  const { loading, products, error } = ListProducts;

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div className="homepage__wrapper">
      <div className="homepage__wrapper-title">
        <h5>The Lastest Products</h5>
      </div>

      {loading ? (
        <Loader
          className="homepage__loading"
          src={loadingLogo}
          logoClassName="homepage__logo"
        />
      ) : error ? (
        <div className="homepage__error">
          <h3>ERREUR...</h3>
        </div>
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
