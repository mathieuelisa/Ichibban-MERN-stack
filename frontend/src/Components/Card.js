import Rating from "./Rating";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className="homepage__cardContainer">
      <div className="homepage__cardContainer-pictures">
        <Link to={`/product/${product._id}`}>
          <img alt="myImg" className="product__pictures" src={product.image} />
        </Link>
      </div>
      <div className="homepage__cardContainer-description">
        <div className="homepage__cardContainer-description-first">
          <Link
            to={`/product/${product._id}`}
            className="homepage__cardContainer-description-title"
          >
            <h2>{product.name}</h2>
          </Link>

          <h3 className="homepage__cardContainer-description-price">
            {product.price} €
          </h3>
        </div>
        <div className="homepage__cardContainer-description-second">
          <p>{product.description}</p>
        </div>
        <div className="homepage__cardContainer-description-third">
          <Rating value={product.rating} review={product.numReviews} />
        </div>
      </div>
    </div>
  );
}

export default Card;
