import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";

import BNavbar from "./components/BNavbar";
import Home from "./Home";
import Main from "./Main";

function App() {

  
  return (
    <>
      <BNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
