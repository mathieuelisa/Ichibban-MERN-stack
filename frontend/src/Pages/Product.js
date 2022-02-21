import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";

import { productDetailList } from "../redux/actions/productsActions";

function Product() {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const ListDetailProduct = useSelector((state) => state.ListDetailProduct);
  const { product } = ListDetailProduct;

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    navigate(`/cart/${id}?qty=${quantity}`);
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
      </div>
    </div>
  );
}

export default Product;
