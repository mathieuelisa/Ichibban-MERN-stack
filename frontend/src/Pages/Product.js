import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useNavigate, Link } from "react-router-dom";

import { productDetailList } from "../redux/actions/productsActions";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const ListDetailProduct = useSelector((state) => state.ListDetailProduct);
  const { product } = ListDetailProduct;

  // a definir
  const productCreateReview = useSelector((state) => state.ProductCreateReview);
  const { success: successCreateReview, error: errorCreateReview } =
    productCreateReview;

  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    navigate(`/cart/${id}?qty=${quantity}`);
  };

  const handleCreateReviewSubmit = (e) => {
    e.preventDefault();
    console.log("Your review have been created");
  };

  useEffect(() => {
    dispatch(productDetailList(id));
  }, [dispatch, id]);

  return (
    <div className="product__container">
      <div className="product__container-pictures">
        <img
          className="product__container-pictures-img"
          src={product.image}
          alt="test"
        />
      </div>
      <div className="product__container-infos">
        <h1 className="product__container-infos-name">{product.name}</h1>
        <h3 className="product__container-infos-price">€ {product.price}</h3>
        <p className="product__description">Description</p>
        <p className="product__container-infos-text">{product.description}</p>
        <p className="product__description">Disponibilité</p>
        <p className="product__container-infos-text">
          {product.countInStock > 0 ? (
            "Disponible"
          ) : (
            <span style={{ color: "red" }}>Non disponible</span>
          )}
        </p>

        <p className="product__description">Quantité</p>

        {product.countInStock > 0 && (
          <form className="product__quantity">
            <select
              className="product__select"
              value={quantity}
              onChange={handleChangeQuantity}
            >
              {[...Array(product.countInStock).keys()].map((qty) => (
                <option key={qty + 1} value={qty + 1}>
                  {qty + 1}
                </option>
              ))}
            </select>
          </form>
        )}
        <div className="product__container-button">
          <button
            type="submit"
            className="product__container-button-valide"
            onClick={addHandler}
          >
            <i className="fa-solid fa-basket-shopping"></i>
            AJOUTER AU PANIER
          </button>
        </div>
        <div className="product__container_reviews">
          <h4 className="product__container_reviews-title">COMMENTAIRES</h4>

          {userInformation ? (
            <>
              <h5>Listing des avis</h5>
              {/* Afficher name / rating and comments si y'en a */}
            </>
          ) : (
            <>
              <h5>
                Veuillez vous connecté en cliquant <Link to="/login">ici</Link>{" "}
                pour laisser un avis.
              </h5>
            </>
          )}
        </div>
        <div className="product__container_form">
          {userInformation ? (
            <>
              <form className="login__form" onSubmit={handleCreateReviewSubmit}>
                <label>
                  <p className="product__description">Note: </p>
                  <select
                    type="text"
                    name="rating"
                    // value={state.email}
                    onChange={(e) => setRating(e.target.value)}
                    className="product__select"
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>

                <label>
                  <p className="product__description">Commentaire</p>
                  <textarea
                    type="text"
                    name="comments"
                    // value={state.email}
                    onChange={(e) => setComments(e.target.value)}
                    className="login__form-inputs"
                  />
                </label>

                <button className="login__form-button-validate">
                  SE CONNECTER
                </button>
              </form>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
