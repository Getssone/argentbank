import axios from "axios";
import { editUser, editUserError, editUserSuccess,} from "../Redux/actions/editUser";
import { loadToken, loadTokenError, loadTokenSuccess,} from "../Redux/actions/getToken";
import { loadUser, loadUserError, loadUserSuccess,} from "../Redux/actions/getUser";
import { logOut } from "../Redux/actions/logout"

//récupération de l'API via axios
axios.defaults.baseURL = "http://localhost:3001/api/v1/user";



/**
 * Login to get user's token
 * @function
 * @name getToken
 * @param {string} email
 * @param {string} password
 * @returns {object}
 */

 export const getToken = (email, password) => {
  return (dispatch) => {
    dispatch(loadToken());
    axios
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        dispatch(loadTokenSuccess(response.data.body.token));
        localStorage.setItem("token", response.data.body.token);
        const token = localStorage.getItem("token");
        dispatch(getUser(token));
      })
      .catch((error) => {
        dispatch(loadTokenError(error.message));
      });
  };
};


/**
 * to get user's infos
 * @function
 * @name getUser
 * @param {string} token
 * @returns {object}
 */

export const getUser = (token) => {
  return (dispatch) => {
    dispatch(loadUser());
    axios({
      method: "POST",
      url: "/profile",
      //Syntaxe d'authentification du jeton du porteur
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        //data = {"status":number ,"message":string,"body":{"email":string,"firstName":string,"lastName":string,"createdAt":string,"updatedAt":string,"id":string}}
        dispatch(loadUserSuccess(response.data));
        // localStorage.setItem("id", response.data.body.id);
        // localStorage.setItem("email", response.data.body.email);
        // localStorage.setItem("firstName", response.data.body.firstName);
        // localStorage.setItem("lastName", response.data.body.lastName);

      })
      .catch((error) => {
        //{"status":number,"message":string}
        dispatch(loadUserError(error.message));
      });
  };
};


/**
 * to update user's profile
 * @function
 * @name editUsers
 * @param {string} firstname
 * @param {string} lastname
 * @returns {object}
 */

export const editUsers = (firstName, lastName) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(editUser());
    axios({
      method: "PUT",
      url: "/profile",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((response) => {
        dispatch(editUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(editUserError(error.message));
      });
  };
};

/**
 * fonction to log out if connected
 * @function
 * @name logout
 * @returns {object}
 */

 export const logout = () => {
  localStorage.removeItem("token");
  return (dispatch) => {
    dispatch(logOut());
  };
};
