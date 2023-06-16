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

  const [currentCategory, setCurrentCategory] = useState("Coffee");

  function changeCategory(name) {
    setCurrentCategory(name);
  }

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
    checkIfNot0();
  }

  function checkIfNot0() {
    setInBasket((prevInBasket) =>
      prevInBasket.map((category) =>
        category.filter((item) => item.quantity > 0)
      )
    );
  }

  function addItemToBasket(product) {
    setInBasket((prevInBasket) => {
      const existingItem = prevInBasket
        .flat()
        .find((item) => item.id === product.id);

      if (existingItem) {
        return prevInBasket.map((category) =>
          category.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        const newProduct = { ...product, quantity: 1 };
        return [...prevInBasket, [newProduct]];
      }
    });
    setIsBasketActive(true)
  }

  const [isBasketActive, setIsBasketActive] = useState(false);

  function toggleBasket() {
    setIsBasketActive((prevState) => !prevState);
  }

  function countTotal() {
    setTotalQuantity(
      inBasket.reduce((total, category) => {
        return (
          total +
          category.reduce((categoryTotal, item) => {
            return categoryTotal + item.quantity;
          }, 0)
        );
      }, 0)
    );
  }

  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    countTotal();
  }, [inBasket]);

  return (
    <div className="app-wrapper ">
      <Stars />

      <div className="main-wrapper">
        <Nav toggleBasket={toggleBasket} totalQuantity={totalQuantity} />

        <Routes>
          <Route
            path="/"
            exact={true}
            element={<Home changeCategory={changeCategory} />}
          />
          <Route
            path="/shop/"
            exact={true}
            element={
              <Shop
                addItemToBasket={addItemToBasket}
                currentCategory={currentCategory}
                changeCategory={changeCategory}
              />
            }
          />
          <Route path="/contact" exact={true} element={<Contact />} />
        </Routes>
      </div>
      <Basket
        isBasketActive={isBasketActive}
        toggleBasket={toggleBasket}
        basketData={inBasket}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
        totalQuantity={totalQuantity}
      />
    </div>
  );
}

export default App;
