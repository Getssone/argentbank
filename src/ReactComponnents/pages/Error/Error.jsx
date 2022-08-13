import logo from "../../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <main className="main bg-dark">
      <div className="error-page">
        This page doesn't exit, clic on our logo to be redirected to ArgentBank
        Home Page.
      </div>
      <br />
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="logo de argentBank"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
    </main>
  );
}
