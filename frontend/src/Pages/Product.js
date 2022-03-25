import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useNavigate, Link } from "react-router-dom";
import Rating from "../Components/Rating";

import {
  createReviewProduct,
  productDetailList,
  PRODUCT_CREATE_REVIEW_RESET,
} from "../redux/actions/productsActions";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

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
    console.log("test ok");
    dispatch(createReviewProduct(id, { rating, comment }));
  };

  useEffect(() => {
    if (successCreateReview) {
      alert("new review");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(productDetailList(id));
  }, [dispatch, id, successCreateReview]);

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
        <div className="product__container-infos-divNameTitle">
          <h1 className="product__container-infos-name">{product.name}</h1>
          <h3 className="product__container-infos-price">€ {product.price}</h3>
        </div>
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
            className="product__container-button-valide buttonReview"
            onClick={addHandler}
          >
            <i className="fa-solid fa-basket-shopping"></i>
            AJOUTER AU PANIER
          </button>
        </div>
        <h4 className="product__container_reviews-title">COMMENTAIRES</h4>
        <div className="product__container_reviews-divReviewForm">
          <div className="product__container_reviews">
            {userInformation ? (
              <>
                {product.reviews &&
                  product.reviews.map((element) => (
                    <>
                      <div className="product__container_reviews-divNameDate">
                        <p className="product__container_reviews-name">
                          Par: {element.name}
                        </p>
                        <p className="product__container_reviews-date">
                          le {element.createdAt.substring(0, 10)}
                        </p>
                      </div>
                      <p className="product__container_reviews-comments">
                        {element.comment}
                      </p>
                      <Rating value={element.rating} />
                    </>
                  ))}
              </>
            ) : (
              <>
                <h5>
                  Veuillez vous connecté en cliquant{" "}
                  <Link to="/login">ici</Link> pour laisser un avis.
                </h5>
              </>
            )}
          </div>
          <div className="product__container_form">
            {userInformation ? (
              <>
                <form
                  className="login__form"
                  onSubmit={handleCreateReviewSubmit}
                >
                  <label>
                    <p className="product__description">Note: </p>
                    <select
                      type="text"
                      name="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="product__select selectReview"
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
                      name="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="login__form-inputs review"
                    />
                  </label>

                  <div className="product__container-button">
                    <button className="product__container-button-valide buttonReview">
                      PUBLIER
                    </button>
                  </div>
                </form>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
