import { Route,Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Error from "../pages/Error/Error";
import "../App/App.css";


export default function App() {
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
