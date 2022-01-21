import { useEffect, useState } from "react";
import "../App.scss";
import Card from "../Components/Card";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataProducts = () => {
      axios
        .get("/api/products")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((err) => console.log(err));
    };

    fetchDataProducts();
  }, []);

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
