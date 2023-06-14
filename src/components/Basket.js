import React from "react";

import iconClose from "../img/icons/close.svg";
import coffeeMachine from "../img/coffeeMachine.webp";
import coffeeBag from "../img/coffeeBag.webp";
import coffeeAccessories from "../img/coffeeAccessories.webp";
import gift from "../img/gift.webp";
import merchandise from "../img/merchandise.webp";
import subscription from "../img/subscription.webp";
import tea from "../img/tea.webp";

import plus from "../img/icons/plus.svg";
import minus from "../img/icons/minus.svg";

export default function Basket(props) {
  const flattenedBasketData = props.basketData.flat();

  const basketItems = flattenedBasketData.map((item) => (
    <div className="basket-item-container" key={item.id}>
      <div className="basket-item-img-container">
        <img
          src={getImagePath(item.img)}
          alt={item.img}
          className="basket-item-img"
        />
      </div>
      <p className="basket-item-name">{item.name}</p>
      <p className="basket-item-quantity">{item.quantity}x</p>
      <p className="basket-item-price">${item.price}</p>
      <div className="quantity-change-container">
        <button
          className="btn-quantity"
          onClick={() => props.addQuantity(item.id)}
        >
          <img className="quantity-icon" src={plus} alt="" />
        </button>
        <button
          className="btn-quantity"
          onClick={() => props.subtractQuantity(item.id)}
        >
          <img className="quantity-icon" src={minus} alt="" />
        </button>
      </div>
    </div>
  ));

  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const calculatedPrice = flattenedBasketData.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(calculatedPrice);
  }, [flattenedBasketData]);

  return (
    <div
      className="basket-container"
      style={{ display: props.isBasketActive ? "flex" : "none" }}
    >
      <button className="close-btn" onClick={props.toggleBasket}>
        <img src={iconClose} alt="close basket icon" />
      </button>
      <h2>Your Basket</h2>
      {basketItems.length > 0 ? (
        <>
          <div className="basket-items-container">{basketItems}</div>

          <div className="basket-total-container">
            <p className="basket-total-txt"> Total price: ${totalPrice}</p>
            <button className="btn pay-btn"> Pay Now!</button>
          </div>
        </>
      ) : (
        <p>Basket Empty</p>
      )}
    </div>
  );
}
function getImagePath(img) {
  switch (img) {
    case "coffeeMachine":
      return coffeeMachine;
    case "coffeeBag":
      return coffeeBag;
    case "coffeeAccessories":
      return coffeeAccessories;
    case "gift":
      return gift;
    case "merchandise":
      return merchandise;
    case "subscription":
      return subscription;
    case "tea":
      return tea;
    default:
      return "";
  }
}
