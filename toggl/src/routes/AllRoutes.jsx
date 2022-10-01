import React from "react";
import { Routes, Route } from "react-router-dom";
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

export default AllRoutes;
