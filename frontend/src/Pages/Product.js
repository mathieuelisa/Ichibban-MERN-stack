import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [myProduct, setMyProduct] = useState({});

  useEffect(() => {
    const fetchDataProduct = () => {
      axios
        .get(`/api/products/${id}`)
        .then((response) => {
          setMyProduct(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchDataProduct();
  }, [id]);

  return (
    <div className="product__container">
      <div className="product__container-pictures">
        <img
          className="product__container-pictures-img"
          src={myProduct[0]?.image}
          alt="test"
        />
      </div>
      <div className="product__container-infos">
        <h1 className="product__container-infos-name">{myProduct[0]?.name}</h1>
        <h3 className="product__container-infos-price">
          € {myProduct[0]?.price}
        </h3>
        <p className="product__description">Description</p>
        <p className="product__container-infos-text">
          {myProduct[0]?.description}
        </p>
        <p className="product__description">Disponibilité</p>
        <p className="product__container-infos-text">
          {myProduct[0]?.countInStock > 0 ? "Disponible" : "Non disponible"}
        </p>

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
