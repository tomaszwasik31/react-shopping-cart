import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Stars from "./components/Stars";
import Machines from "./components/Categories/Machines";
import Coffee from "./components/Categories/Coffee";
import TeaSelection from "./components/Categories/TeaSelection";
import Merchandise from "./components/Categories/Merchandise";
import GiftSets from "./components/Categories/GiftSets";
import Subscriptions from "./components/Categories/Subscriptions";
import Accessories from "./components/Categories/Accessories";
import Basket from "./components/Basket";

function App() {


  const [isBasketActive, setIsBasketActive] = React.useState(false)


  function toggleBasket (){
    setIsBasketActive(prevState => !prevState)
  }
  return (
    <>
      <Stars />
      <Basket isBasketActive={isBasketActive} toggleBasket={toggleBasket}/>
      <div className="app-wrapper">
        <Nav toggleBasket={toggleBasket}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/" element={<Shop />}>
            <Route path="coffee" element={<Coffee />} />
            <Route path="machines" element={<Machines />} />
            <Route path="tea-selection" element={<TeaSelection />} />
            <Route path="merchandise" element={<Merchandise />} />
            <Route path="gift-sets" element={<GiftSets />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="accessories" element={<Accessories />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
