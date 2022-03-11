import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import LoaderSpinner from "../Components/LoaderSpinner";
import loadingLogo from "../Assets/Images/spinner2.gif";

import { deleteUser, listOfUsers } from "../redux/actions/userActions";

import ErrorMessage from "../Components/ErrorMessage";

function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = useSelector((state) => state.UserList);
  const {
    error: errorUserList,
    loading: loadingUserList,
    users: usersMyList,
  } = usersList;

  const deleteTheUser = useSelector((state) => state.UserDelete);
  const {
    // error: errorDelete,
    success: successDelete,
    // loading: loadingDelete,
  } = deleteTheUser;

  const userLogin = useSelector((state) => state.UserLogin);
  const { userInformation } = userLogin;

  const removeItem = (id) => {
    console.log(`Your user ${id} have been deleted`);
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (userInformation && userInformation.isAdmin) {
      dispatch(listOfUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, successDelete, navigate, userInformation]);

  return (
    <div className="userList__container-customer">
      <h2 className="userList__container-title">UTILISATEURS</h2>
      <div>
        {loadingUserList ? (
          <LoaderSpinner logoClassName="loaderSpinner" src={loadingLogo} />
        ) : errorUserList ? (
          <ErrorMessage textClassName="redError">
            Sorry, we have a problem about your list
          </ErrorMessage>
        ) : (
          <table className="tableau-style">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMS</th>
                <th>EMAILS</th>
                <th>ADMINISTRATEURS</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody>
              {usersMyList.map((element) => {
                return (
                  <tr key={element._id}>
                    <td>{element._id}</td>
                    <td>{element.name}</td>
                    <td>
                      <a
                        href={`mailto:${element.email}`}
                        className="anchor__userList"
                      >
                        {element.email}
                      </a>
                    </td>
                    <td>
                      {element.isAdmin ? (
                        <i
                          className="fa-solid fa-check"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {" "}
                      <Link to={`/admin/user/${element._id}/edit`}>
                        <i
                          className="fas fa-edit"
                          style={{ color: "gray" }}
                        ></i>
                      </Link>
                      <i
                        className="fas fa-trash-alt"
                        style={{ color: "gray" }}
                        onClick={() => removeItem(element._id)}
                      ></i>
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

export default UserList;
