import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Stars from "./components/Stars";
import Basket from "./components/Basket";

function App() {
  const basketData = [
    [
      {
        id: "1",
        name: "BrewMaster 2000",
        price: 249.99,
        img: "coffeeMachine",
        quantity: 1,
      },
    ],
    [
      {
        id: "6",
        name: "Colombian Supreme",
        price: 15.99,
        img: "coffeeBag",
        quantity: 2,
      },
    ],
  ];
  const [inBasket, setInBasket] = useState(basketData);

  function addQuantity(id) {
    setInBasket((prevInBasket) =>
      prevInBasket.map((category) =>
        category.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    );
  }

  function subtractQuantity(id) {
    setInBasket((prevInBasket) =>
      prevInBasket.map((category) =>
        category.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      )
    );
    validateBasket();
  }

  function validateBasket() {
    setInBasket((prevInBasket) =>
      prevInBasket.map((category) =>
        category.filter((item) => item.quantity > 0)
      )
    );
  }

  const [isBasketActive, setIsBasketActive] = useState(false);

  function toggleBasket() {
    setIsBasketActive((prevState) => !prevState);
  }

  return (
    <>
      <Stars />
      <Basket
        isBasketActive={isBasketActive}
        toggleBasket={toggleBasket}
        basketData={inBasket}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
      />
      <div className="app-wrapper">
        <Nav toggleBasket={toggleBasket} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
