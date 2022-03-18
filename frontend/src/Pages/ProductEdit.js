import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import ErrorMessage from "../Components/ErrorMessage";

import {
  productDetailList,
  PRODUCT_UPDATE_RESET,
  updateProduct,
} from "../redux/actions/productsActions";

function ProductEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const productInfos = useSelector((state) => state.ListDetailProduct);
  const { product, error: errorProductInfos } = productInfos;

  const update = useSelector((state) => state.ProductUpdate);
  const {
    error: errorProductUpdate,
    success: successUpdate,
    loading: loadingUpdate,
  } = update;

  const [user, setUser] = useState("");
  const [numReviews, setNumReviews] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate("/admin/product");
    } else {
      if (!product.name || product._id !== id) {
        dispatch(productDetailList(id));
      } else {
        setUser(product.user);
        setNumReviews(product.numReviews);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, product, id, navigate, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: id,
        numReviews,
        user,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };

  const handleBackButton = () => {
    navigate("/admin/product");
  };

  return (
    <>
      {errorProductUpdate && (
        <ErrorMessage textClassName="redError">
          Une erreur est survenue au niveau de la mise à jour
        </ErrorMessage>
      )}

      {loadingUpdate && (
        <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
      )}

      {errorProductInfos && (
        <ErrorMessage textClassName="redError">
          Une erreur est survenue au niveau de l'affichage des produits
        </ErrorMessage>
      )}
      <div className="userEdit__back">
        <h4 className="userEdit__back-title" onClick={handleBackButton}>
          Retour
        </h4>
      </div>
      <div className="login__container">
        <div className="register__container-customer">
          <h2>MISE A JOUR DES PRODUITS</h2>
          <div className="register__container-customer-form">
            <form className="register__form" onSubmit={handleSubmit}>
              <label className="register__form-label">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="NOM"
                  className="register__form-inputs"
                />
              </label>

              <label className="register__form-label">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="PRIX"
                  className="register__form-inputs"
                />
              </label>

              <label className="register__form-label">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="IMAGE"
                  className="register__form-inputs"
                />
              </label>

              <label className="register__form-label">
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="MARQUE"
                  className="register__form-inputs"
                />
              </label>

              <label className="register__form-label">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="CATEGORIE"
                  className="register__form-inputs"
                />
              </label>

              <label className="register__form-label">
                <input
                  type="number"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                  placeholder="QUANTITE EN STOCK"
                  className="register__form-inputs"
                />
              </label>

              <label className="register__form-label">
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="DESCRIPTION"
                  className="register__form-inputs textArea"
                />
              </label>

              <button className="product__container-button-valide">
                MISE A JOUR
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductEdit;
