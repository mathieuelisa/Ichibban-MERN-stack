import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { deleteProduct, productList } from "../redux/actions/productsActions";

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

  const removeItem = (id) => {
    console.log(`Your product ${id} have been deleted`);
    dispatch(deleteProduct(id));
  };

  const handleCreatingProduct = () => {
    console.log("Product created");
  };

  useEffect(() => {
    if (userInformation && userInformation.isAdmin) {
      dispatch(productList());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInformation, successDeleteProduct]);

  return (
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
      <div>
        {loadingProducts ? (
          <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
        ) : errorProducts ? (
          <ErrorMessage textClassName="redError">
            Sorry, we have a problem about your list
          </ErrorMessage>
        ) : (
          <table className="tableau-style">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMS</th>
                <th>PRIX</th>
                <th>CATEGORIES</th>
                <th>MARQUES</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody>
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
  );
}

export default ProductsList;
