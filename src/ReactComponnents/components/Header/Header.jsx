import {Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/argentBankLogo.png";
import { logout } from "../../../utils/getApi"


const Header = () => {
  const dispatch = useDispatch();
//Récupere dans le store: getUser.isLogged
  const selectLogin = (state) => state.getUser.isLogged;
  const login = useSelector(selectLogin);
//Récupere dans le store: getUser.user
  const selectUser = (state) => state.getUser.user.body;
  const user = useSelector(selectUser);

  return (
    <nav className="main-nav">
      
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="logo de argentBank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {login ? (
        <div>
          <Link to="./profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </Link>
          <button className="main-nav-item" onClick={() => dispatch(logout())}>
            <i className="fas fa-sign-out-alt"></i>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="./login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <button className="main-nav-item">Sign In</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
