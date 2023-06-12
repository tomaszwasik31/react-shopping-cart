import React from "react";
import itemImg from "../img/coffeeMachine.webp";
import iconClose from "../img/icons/close.svg";

export default function Basket(props) {
  return (
    <div
      className="basket-container"
      style={{ display: props.isBasketActive ? "flex" : "none" }}
    >
      <button className="close-btn" onClick={props.toggleBasket}>
        <img src={iconClose} alt="" />
      </button>
      <h2>Your Basket</h2>
      <div className="basket-items-container">
        <div className="basket-item-container">
          <div className="baste-item-img-container">
            <img src={itemImg} alt="" className="basket-item-img" />
          </div>
          <p className="basket-item-name">Item name</p>
          <p className="basket-item-quantity">1x</p>
          <p className="basket-item-price">$19.99</p>
        </div>
      </div>
      <div className="basket-total-container">
        <p className="basket-total-txt"> Total: $123.12</p>
        <button className="btn pay-btn"> Pay Now!</button>
      </div>
    </div>
  );
}
