import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <img src={logo} alt="GiftTraders logo"></img>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/gifts"}>Gifts</Link>
            </li>
          </ul>
        </nav>
        <p className="admin-link">
          {" "}
          <li>
            <Link to={"/admin"}>Admin</Link>
          </li>
        </p>
      </div>
    </header>
  );
}
