import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
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
  const [inBasket, setInBasket] = React.useState(basketData);

  const [isBasketActive, setIsBasketActive] = React.useState(false);

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
