import "../App.scss";
import Card from "../Components/Card";
import products from "../products";

function HomePage() {
  return (
    <div className="homepage__wrapper">
      <div className="homepage__wrapper-title">
        <h5>The Lastest Products</h5>
      </div>

      <div className="homepage__container">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
