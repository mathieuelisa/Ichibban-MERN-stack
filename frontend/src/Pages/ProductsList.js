import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import {
  createProduct,
  deleteProduct,
  productList,
  PRODUCT_CREATE_RESET,
} from "../redux/actions/productsActions";

import ErrorMessage from "../Components/ErrorMessage";

function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ListProducts = useSelector((state) => state.ListProducts);
  const {
    loading: loadingProducts,
    products,
    error: errorProducts,
  } = ListProducts;

  const productDelete = useSelector((state) => state.ProductDelete);
  const { success: successDeleteProduct } = productDelete;

  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  const productCreate = useSelector((state) => state.ProductCreate);
  const {
    // loading: loadingCreate,
    // error: errorCreate,
    product,
    success: successCreate,
  } = productCreate;

  const removeItem = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleCreatingProduct = () => {
    dispatch(createProduct());
  };

  const handleBackButton = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInformation.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/product/${product._id}/edit`);
    } else {
      dispatch(productList());
    }
  }, [
    dispatch,
    navigate,
    userInformation,
    successDeleteProduct,
    successCreate,
    product,
  ]);

  return (
    <>
      <div className="userEdit__back">
        <h4 className="userEdit__back-title" onClick={handleBackButton}>
          Retour
        </h4>
      </div>
      <div className="userList__container-customer">
        <h2 className="userList__container-title">PRODUITS</h2>
        <div>
          <button
            onClick={handleCreatingProduct}
            className="product__container-button-valide"
          >
            Ajouter un produit
          </button>
        </div>
        <div className="product__container-listing">
          {loadingProducts ? (
            <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
          ) : errorProducts ? (
            <ErrorMessage textClassName="redError">
              Désolé, nous avons un petit problème avec votre liste de produits.
            </ErrorMessage>
          ) : (
            <table className="tableau-style">
              <thead className="product__container-thead">
                <tr>
                  <th>ID</th>
                  <th>NOMS</th>
                  <th>PRIX</th>
                  <th>CATEGORIES</th>
                  <th>MARQUES</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody className="product__container-tbody">
                {products.map((element) => {
                  return (
                    <tr key={element._id}>
                      <td>{element._id}</td>

                      <td>
                        <a
                          href={`/product/${element._id}`}
                          className="anchor__productList"
                        >
                          {element.name}
                        </a>
                      </td>

                      <td>{element.price} €</td>
                      <td>{element.category}</td>
                      <td>{element.brand}</td>
                      <td>
                        {" "}
                        <Link to={`/admin/product/${element._id}/edit`}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "gray" }}
                          ></i>
                        </Link>
                        <i
                          className="fas fa-trash-alt"
                          style={{ color: "gray" }}
                          onClick={() => removeItem(element._id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
