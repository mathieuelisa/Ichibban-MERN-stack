import { useLocation, useParams } from "react-router-dom";

function Cart() {
  const { id } = useParams();
  const location = useLocation();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  console.log(qty);

  return (
    <>
      <h2>Cart page !!! {id}</h2>
    </>
  );
}

export default Cart;
