import { Outlet, NavLink, useLocation } from "react-router-dom";
import data from "../data.json";

import Category from "../components/Category";

const getNavLinkClassName = ({ isActive }) =>
  isActive ? "btn active-btn" : "btn";

const shopLandingPage = (
  <Category
    data={data.categories.find(
      (category) => category.name === "Best Selling Products"
    )}
  />
);

export default function Shop() {
  const location = useLocation();
  const isShopRoute = location.pathname === "/shop";

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
      </div>
      <div className="page-wrapper container-max">
        {isShopRoute && shopLandingPage}
        <Outlet />
      </div>
    </>
  );
}
