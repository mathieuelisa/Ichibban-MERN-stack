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
          <h2>{product.name}</h2>
          <h3>{product.price} €</h3>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Card;
