import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../App.scss";

import Card from "../Components/Card";
import Loader from "../Components/Loader";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { productList } from "../redux/actions/productsActions.js";

import ErrorMessage from "../Components/ErrorMessage";
import { Link, useParams } from "react-router-dom";
import Pagination from "../Components/Pagination";

function HomePage() {
  const dispatch = useDispatch();
  const { search, page } = useParams();

  const ListProducts = useSelector((state) => state.ListProducts);
  const {
    loading,
    products,
    error,
    page: pagePagination,
    pages,
  } = ListProducts;

  useEffect(() => {
    dispatch(productList(search, page));
  }, [dispatch, search, page]);

  return (
    <div className="homepage__wrapper">
      <div className="homepage__wrapper-title">
        <h4 className="homepage__wrapper-bestProducts-title">
          Pour connaitre notre TOP PRODUITS cliquez
        </h4>
        <Link
          to={`/bestproducts`}
          className="homepage__wrapper-titleBestProducts"
        >
          {" "}
          ici
        </Link>
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
        <>
          <div className="homepage__container">
            {products.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
          <Pagination
            page={pagePagination}
            pages={pages}
            search={search ? search : ""}
          />
        </>
      )}
    </div>
  );
}

export default HomePage;
