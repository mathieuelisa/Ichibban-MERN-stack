import Steps from "../Components/Steps";

function Order() {
  return (
    <>
      <Steps step1 step2 step3 step4 />
      <div className="order__container">
        <h2 className="order__title">Resumé de votre commande</h2>
        <div className="order__container-mainTitle">
          <div className="order__container-parts-articles">
            <h4>Liste des articles selectionnés</h4>
          </div>

          <div className="order__container-parts">
            <h4>Adresse de livraison</h4>
          </div>

          <div className="order__container-parts-paymentMethod">
            <h4>Method de paiment</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
