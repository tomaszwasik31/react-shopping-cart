import { Outlet, NavLink } from "react-router-dom";

const getNavLinkClassName = ({ isActive }) =>
  isActive ? "btn active-btn" : "btn";

export default function Shop() {
  return (
    <>
      <div className="page-wrapper container-max">
        <div className="shop-btn-container">
          <NavLink className={getNavLinkClassName} exact to="/shop/coffee">
            Coffee
          </NavLink>
          <NavLink
            className={getNavLinkClassName}
            exact
            to="/shop/tea-selection"
          >
            Tea Selection
          </NavLink>
          <NavLink className={getNavLinkClassName} exact to="/shop/merchandise">
            Coffee Merchandise
          </NavLink>
          <NavLink className={getNavLinkClassName} exact to="/shop/gift-sets">
            Gift Sets
          </NavLink>
          <NavLink
            className={getNavLinkClassName}
            exact
            to="/shop/subscriptions"
          >
            Coffee Subscriptions
          </NavLink>
          <NavLink className={getNavLinkClassName} exact to="/shop/machines">
            Coffee Machines
          </NavLink>
          <NavLink className={getNavLinkClassName} exact to="/shop/accessories">
            Coffee Accessories
          </NavLink>
        </div>
        Shop
      </div>
      <Outlet />
    </>
  );
}
