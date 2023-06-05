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

function App() {
  return (
    <>
      <Stars />
      <div className="app-wrapper">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path="machines" element={<Machines />} />
            <Route path="coffee" element={<Coffee />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
