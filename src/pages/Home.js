import React from "react";
import star from "../img/icons/star.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import circleLottie from "../img/lottie/circle-lottie.json";
import coffeeMachine from "../img/coffee-machine.webp";
import coffeeBag from "../img/coffee-bag.webp";
import coffeeAccessories from "../img/coffee-accessories.webp";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-wrapper container-max">
      <div className="h1-container">
        <img className="h1-star" src={star} alt="" />
        <h1>
          Welcome to Brew<span className="accent">Hive</span>
        </h1>
        <Player
          className="circleLottie"
          autoplay
          loop
          src={circleLottie}
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <img className="h1-star" src={star} alt="" />
      </div>

      <p className="tagline">Unleash Your Coffee Passion with BrewHive</p>
      <p className="small-txt">Today I am looking for</p>
      <div className="big_category-container">
        <div className="category-container">
          <NavLink className="img-category-container" exact to="/shop/machines">
            <img src={coffeeMachine} alt="" className="img-category" />
          </NavLink>
          <h3 className="txt-category">Coffee Machine</h3>
        </div>
        <div className="category-container">
          <NavLink className="img-category-container" exact to="/shop/coffee">
            <img src={coffeeBag} alt="" className="img-category" />
          </NavLink>
          <h3 className="txt-category">Coffee</h3>
        </div>
        <div className="category-container">
          <NavLink
            className="img-category-container"
            exact
            to="/shop/accessories"
          >
            <img src={coffeeAccessories} alt="" className="img-category" />
          </NavLink>
          <h3 className="txt-category">Coffee Accessories</h3>
        </div>
      </div>
      <div className="small-category-container">
        <NavLink className="btn" exact to="/shop/tea-selection">
          Tea Selection
        </NavLink>
        <NavLink className="btn" exact to="/shop/merchandise">
          Coffee Merchandise
        </NavLink>
        <NavLink className="btn" exact to="/shop/gift-sets">
          Gift Sets
        </NavLink>
        <NavLink className="btn" exact to="/shop/subscriptions">
          Coffee Subscriptions
        </NavLink>
      </div>
    </div>
  );
}
