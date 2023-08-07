import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <img src="#" alt="GiftTraders logo"></img>
        <h1>Gift Traders</h1>
        <nav>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/gifts"}>Gifts</Link>
          </li>
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
