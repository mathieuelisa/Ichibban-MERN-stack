// import axios from "axios"
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import ErrorMessage from "../Components/ErrorMessage";

// import LoaderSpinner from "../Components/LoaderSpinner";
// import loadingLogo from "../Assets/Images/spinner2.gif";

function UserList() {
  return (
    <div className="order__container-customer">
      <h2>MES COMMANDES</h2>
      <div>
        <table className="tableau-style">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Prix total</th>
              <th>Date de paiement</th>
              <th>Livraison</th>
              <th>Infos</th>
            </tr>
          </thead>

          {/* {loadingList && (
          <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
        )} */}
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
