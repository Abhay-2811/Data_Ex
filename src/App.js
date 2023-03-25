import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import Docs from "./pages/Docs";
import SellData from './pages/SellData'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/about" element={<About></About>} />
          <Route
            exact
            path="/marketplace"
            element={<MarketPlace></MarketPlace>}
          />
          <Route exact path="/selldata" element={<SellData></SellData>} ></Route>
          <Route exact path="/docs" element={<Docs/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
