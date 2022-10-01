import React from 'react'
import { Routes, Route } from "react-router-dom";
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

export default AllRoutes