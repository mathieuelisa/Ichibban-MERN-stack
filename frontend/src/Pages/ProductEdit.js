import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import LoaderSpinner from "../Components/LoaderSpinner";
// import loadingLogo from "../Assets/Images/spinner2.gif";

import ErrorMessage from "../Components/ErrorMessage";

import { productDetailList } from "../redux/actions/productsActions";

function ProductEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const productInfos = useSelector((state) => state.ListDetailProduct);
  const { product, error: errorProductInfos } = productInfos;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!product.name || product._id !== id) {
      dispatch(productDetailList(id));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [dispatch, product, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Your product have been updated");
  };

  const handleBackButton = () => {
    navigate("/admin/product");
  };

  return (
    <>
      {errorProductInfos && (
        <ErrorMessage textClassName="redError">
          Une erreur est survenue
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
