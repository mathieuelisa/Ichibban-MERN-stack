import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { ordersList } from "../redux/actions/orderActions";

import ErrorMessage from "../Components/ErrorMessage";

function OrdersList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listOrders = useSelector((state) => state.OrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = listOrders;

  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  useEffect(() => {
    if (!userInformation.isAdmin) {
      navigate("/login");
    } else {
      dispatch(ordersList());
    }
  }, [dispatch, navigate, userInformation]);

  return (
    <div className="userList__container-customer">
      <h2 className="userList__container-title">COMMANDES</h2>
      <div></div>
      <div className="product__container-listing">
        {loadingOrders ? (
          <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
        ) : errorOrders ? (
          <ErrorMessage textClassName="redError">
            Desolé, nous avons un petit problème avec vos commandes.
          </ErrorMessage>
        ) : (
          <table className="tableau-style">
            <thead className="product__container-thead">
              <tr>
                <th>ID</th>
                <th>CLIENTS</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>DATE PAIEMENT</th>
                <th>LIVRAISON</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody className="product__container-tbody">
              {orders.map((element) => {
                return (
                  <tr key={element._id}>
                    <td>{element._id?.substring(0, 10)}...</td>

                    <td>
                      <a
                        href={`/orders/${element._id}`}
                        className="anchor__productList"
                      >
                        {element.user.name}
                      </a>
                    </td>

                    <td>{element.createdAt?.substring(0, 10)}</td>
                    <td>{element.totalPrice} €</td>
                    <td>
                      {element.paidAt ? (
                        element.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {" "}
                      {element.isDelivered ? (
                        element.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {" "}
                      <Link to={`/order/${element._id}`}>Details</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default OrdersList;
