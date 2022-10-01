import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from '../pages/Home';
import Timer from '../pages/Timer';
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/timer' element={<Timer/>} />
        </Routes>
    )
}
=======
import Features from "../components/Features";
import Price from "../components/price/Price";
import Project from "../components/project/Project";
import Home from "../pages/Home";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/price" element={<Price />} />
      <Route path="/features" element={<Features />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};
>>>>>>> 90fabf9c67543b71be65dbc63a329ce58a349ad1

export default AllRoutes;
