import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import BNavbar from "./components/BNavbar";
import Home from "./Home";
import IdHome from "./IdHome";
import Main from "./Main";
import NotFounded from "./NotFounded";

function App() {

  
  return (
    <>
      <BNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<IdHome />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFounded />} />
      </Routes>
    </>
  );
}

export default App;
