import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/bacheca">
            Bacheca
          </Link>
        </li>
        <li>
          <Link className="link" to="/pageButton">
            Button
          </Link>
        </li>
        <li>
          <Link className="link" to="/pageBadge">
            Badge
          </Link>
        </li>
        <li>
          <Link className="link" to="/pageChips">
            Chips
          </Link>
        </li>
        <li>
          <Link className="link" to="/pageTypography">
            Typography
          </Link>
        </li>
        <li>
          <Link className="link" to="/pageIcon">
            Icon
          </Link>
        </li>
        <li>
          <Link className="link" to="/hamburger">
            Hamburger
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
