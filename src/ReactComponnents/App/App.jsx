import { Route,Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Error from "../pages/Error/Error";
import "../App/App.css";
import { getUser } from "../../utils/getApi";
import { loadTokenSuccess } from "../../Redux/actions/getToken";
import { useDispatch } from "react-redux"; 

export default function App() {

  const dispatch = useDispatch();
  const token = localStorage.getItem("token")

  if (token) {
  dispatch(loadTokenSuccess(token));
  dispatch(getUser(token));
  }

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
         <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}
