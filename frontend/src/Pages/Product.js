import { useParams } from "react-router-dom";
import products from "../products";

function Product() {
  const { id } = useParams();

  const myProduct = products.find((p) => p._id === id);
  return (
    <>
      <h1>{myProduct.name}</h1>
    </>
  );
}

export default Product;
