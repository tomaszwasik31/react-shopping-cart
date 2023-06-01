import React from "react";
import star from "../img/icons/star.svg";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import circleLottie from "../img/lottie/circle-lottie.json";
import coffeeMachine from "../img/coffee-machine.webp";
import coffeeBag from "../img/coffee-bag.webp";
import coffeeAccessories from "../img/coffee-accessories.webp";

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
          <div className="img-category-container">
            <img src={coffeeMachine} alt="" className="img-category" />
          </div>
          <h3 className="txt-category"> Coffee Machine</h3>
        </div>
        <div className="category-container">
          <div className="img-category-container">
            <img src={coffeeBag} alt="" className="img-category" />
          </div>
          <h3 className="txt-category"> Coffee</h3>
        </div>
        <div className="category-container">
          <div className="img-category-container">
            <img src={coffeeAccessories} alt="" className="img-category" />
          </div>
          <h3 className="txt-category"> Coffee Accessories</h3>
        </div>
      </div>
      <div className="small-category-container">
        <button className="btn">Tea Selection</button>
        <button className="btn">Coffee Merchandise</button>
        <button className="btn">Gift Sets</button>
        <button className="btn">Coffee Subscriptions</button>
      </div>
    </div>
  );
}
