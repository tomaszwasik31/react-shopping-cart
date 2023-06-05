import { Outlet, NavLink } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <div className="page-wrapper container-max">
        <div className="shop-btn-container">
          <button className="btn">Coffee </button>
          <button className="btn">Tea Selection</button>
          <button className="btn">Coffee Merchandise</button>
          <button className="btn">Gift Sets</button>
          <button className="btn">Coffee Subscriptions</button>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "btn active-btn" : "btn";
            }}
            to="/shop/machines"
          >
            Coffee Machines
          </NavLink>
        </div>
        Shop
      </div>
      <Outlet />
    </>
  );
}
