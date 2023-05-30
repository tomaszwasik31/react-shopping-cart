import React from "react";
import star from "../img/icons/star.svg";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import circleLottie from "../img/lottie/circle-lottie.json";


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
    </div>
  );
}
