import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";

import BNavbar from "./components/BNavbar";
import Home from "./Home";
import Main from "./Main";

function App() {

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('http://localhost:3001/cities')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(users);
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
