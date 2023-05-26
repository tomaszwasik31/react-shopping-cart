import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
