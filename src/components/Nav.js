import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import cart from "../img/cart.svg";

export default function Nav() {
  return (
    <nav className="nav container-max">
      <div className="logo-container ">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-links-container">
        <div>
          <ul className="nav-links-wrapper">
            <li className="nav-link">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/shop"
                isActive={(match, location) => {
                  return location.pathname.includes("/shop");
                  // The isActive function in NavLink checks if the current pathname includes "/shop".
                  // If true, the NavLink is considered active and applies the corresponding styling.
                  // This ensures the "Shop" NavLink remains active on both the "/shop" route and its subpages.
                }}
              >
                Shop
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="cart-container">
        <img className="cart" src={cart} alt="cart" />
      </div>
    </nav>
  );
}
