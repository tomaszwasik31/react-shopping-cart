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
              <NavLink to="/shop">Shop</NavLink>
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
