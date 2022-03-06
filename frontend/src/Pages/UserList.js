// import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { listOfUsers } from "../redux/actions/userActions";

import ErrorMessage from "../Components/ErrorMessage";

function UserList() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.UserList);

  const {
    error: errorUserList,
    loading: loadingUserList,
    users: usersMyList,
  } = usersList;

  useEffect(() => {
    dispatch(listOfUsers());
  }, [dispatch]);

  return (
    <div className="userList__container-customer">
      <h2>MES COMMANDES</h2>
      <div>
        <table className="tableau-style">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
            </tr>
          </thead>

          {loadingUserList ? (
            <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
          ) : errorUserList ? (
            <ErrorMessage textClassName="redError">
              Sorry, we have a problem about your list
            </ErrorMessage>
          ) : (
            <tbody>
              {usersMyList.map((element, index) => {
                return (
                  <tr key={element._id}>
                    <td>{element._id}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>
                      {element.isAdmin ? (
                        <i
                          class="fa-solid fa-check"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          class="fa-solid fa-xmark"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default UserList;
