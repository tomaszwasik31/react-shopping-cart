import React from "react";
import star from "../img/icons/star.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import circleLottie from "../img/lottie/circle-lottie.json";
import coffeeMachine from "../img/coffeeMachine.webp";
import coffeeBag from "../img/coffeeBag.webp";
import coffeeAccessories from "../img/coffeeAccessories.webp";
import { Link } from "react-router-dom";

export default function Home(props) {
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
          <Link
            className="img-category-container"
            exact
            to="/shop/"
            onClick={() => props.changeCategory("Coffee Machine")}
          >
            <img src={coffeeMachine} alt="" className="img-category" />
          </Link>
          <h3 className="txt-category">Coffee Machine</h3>
        </div>
        <div className="category-container">
          <Link
            className="img-category-container"
            exact
            to="/shop/"
            onClick={() => props.changeCategory("Coffee")}
          >
            <img src={coffeeBag} alt="" className="img-category" />
          </Link>
          <h3 className="txt-category">Coffee</h3>
        </div>
        <div className="category-container">
          <Link
            className="img-category-container"
            exact
            to="/shop/"
            onClick={() => props.changeCategory("Coffee Accessories")}
          >
            <img src={coffeeAccessories} alt="" className="img-category" />
          </Link>
          <h3 className="txt-category">Coffee Accessories</h3>
        </div>
      </div>
      <div className="small-category-container">
        <Link
          className="btn"
          exact
          to="/shop/"
          onClick={() => props.changeCategory("Tea Selection")}
        >
          Tea Selection
        </Link>
        <Link
          className="btn"
          exact
          to="/shop/"
          onClick={() => props.changeCategory("Coffee Merchandise")}
        >
          Coffee Merchandise
        </Link>
        <Link
          className="btn"
          exact
          to="/shop/"
          onClick={() => props.changeCategory("Gift Sets")}
        >
          Gift Sets
        </Link>
        <Link
          className="btn"
          exact
          to="/shop/"
          onClick={() => props.changeCategory("Coffee Subscriptions")}
        >
          Coffee Subscriptions
        </Link>
      </div>
    </div>
  );
}
