import { Link } from "react-router-dom";
import "./navbar.scss";

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
          <Link className="link" to="/storybook/button">
            Button
          </Link>
        </li>
        <li>
          <Link className="link" to="/storybook/badge">
            Badge
          </Link>
        </li>
        <li>
          <Link className="link" to="/storybook/chip">
            Chips
          </Link>
        </li>
        <li>
          <Link className="link" to="/storybook/typography">
            Typography
          </Link>
        </li>
        <li>
          <Link className="link" to="/storybook/icon">
            Icon
          </Link>
        </li>
        <li>
          <Link className="link" to="/storybook/hamburger">
            Hamburger
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
