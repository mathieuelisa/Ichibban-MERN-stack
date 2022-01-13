import Rating from "./Rating";

function Card({ product }) {
  return (
    <div className="homepage__cardContainer">
      <div className="homepage__cardContainer-pictures">
        <a href={`/product/${product._id}`}>
          <img alt="myImg" className="product__pictures" src={product.image} />
        </a>
      </div>
      <div className="homepage__cardContainer-description">
        <div className="homepage__cardContainer-description-first">
          <a
            href={`/product/${product._id}`}
            className="homepage__cardContainer-description-title"
          >
            <h2>{product.name}</h2>
          </a>
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
