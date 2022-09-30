import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../components/ForgotPassword'
import Login from '../Page/Login'
import Signup from '../Page/Signup'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
    )
}

export default AllRoutes
