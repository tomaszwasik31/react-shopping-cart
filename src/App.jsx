import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Stars from "./components/Stars";

function App() {
  return (
    <>
      <Stars />
      <div className="app-wrapper">
        
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
