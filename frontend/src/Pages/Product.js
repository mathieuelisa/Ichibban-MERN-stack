import { useParams } from "react-router-dom";
import products from "../products";

function Product() {
  const { id } = useParams();

  const myProduct = products.find((p) => p._id === id);
  return (
    <div className="product__container">
      <div className="product__container-pictures">
        <img
          className="product__container-pictures-img"
          src={myProduct.image}
          alt="test"
        />
      </div>
      <div className="product__container-infos">
        <h1 className="product__container-infos-name">{myProduct.name}</h1>
        <h3 className="product__container-infos-price">€ {myProduct.price}</h3>
        <p className="product__description">Description</p>
        <p className="product__container-infos-text">{myProduct.description}</p>

        <div className="product__container-button">
          <button className="product__container-button-valide">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
