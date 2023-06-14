import data from "../data.json";

import React from "react";

import coffeeMachine from "../img/coffeeMachine.webp";
import coffeeBag from "../img/coffeeBag.webp";
import coffeeAccessories from "../img/coffeeAccessories.webp";
import gift from "../img/gift.webp";
import merchandise from "../img/merchandise.webp";
import subscription from "../img/subscription.webp";
import tea from "../img/tea.webp";

const categories = [
  "Coffee",
  "Tea Selection",
  "Coffee Merchandise",
  "Gift Sets",
  "Coffee Subscriptions",
  "Coffee Machine",
  "Coffee Accessories",
];

export default function Shop(props) {
  // const [currentCategory, setCurrentCategory] = React.useState("Coffee");

  // function changeCategory(name) {
  //   setCurrentCategory(name);
  // }

  const currentDataCategory = data.categories.find(
    (category) => category.name === props.currentCategory
  );

  const products = currentDataCategory.items.map((product) => (
    <div className="product-container" key={product.id} id={product.id}>
      <div className="small-product-img-container">
        <img src={getImagePath(product.img)} alt="" className="product-img" />
        <button className="btn btn-add" onClick={() =>props.addItemToBasket(product)}>Add to basket</button>
      </div>
      <div className="product-desc">
        <p className="product-name">{product.name}</p>
        <p>Price: ${product.price} </p>
      </div>
    </div>
  ));

  const currentCategoryItems = (
    <>
      <div className="category-top-container">
        <h2 className="category-name">{currentDataCategory.name}</h2>
        <div className="shop-category-desc">
          <p>{currentDataCategory.desc}</p>
        </div>
      </div>
      <div className="all-products-container">{products}</div>
    </>
  );

  return (
    <>
      <div className="page-wrapper container-max">
        <div className="shop-btn-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${
                props.currentCategory === category ? "active-btn" : ""
              }`}
              onClick={() => props.changeCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="shop-category-container">{currentCategoryItems}</div>
      </div>
    </>
  );

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
}
