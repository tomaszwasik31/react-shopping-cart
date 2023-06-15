import star from "../img/icons/star.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import circleLottie from "../img/lottie/circle-lottie.json";

export default function Contact() {
  return (
    <div>
      <div className="page-wrapper container-max center">
        <div className="h1-container">
          <img className="h1-star" src={star} alt="" />
          <h1>
            Contact to Brew<span className="accent">Hive</span>
          </h1>
          <Player
            className="circleLottie"
            autoplay
            loop
            src={circleLottie}
            style={{ height: "auto", width: "50%", opacity: "30%" }}
          ></Player>
          <img className="h1-star" src={star} alt="" />
        </div>

        <p className="tagline">This project is build by Tomasz Wasik</p>
        <p className="small-txt">React App, shop with cart</p>
        <a className="small-txt" href="https://github.com/tomaszwasik31/react-shopping-cart">Link to GitHub</a>
        
      </div>
    </div>
  );
}
