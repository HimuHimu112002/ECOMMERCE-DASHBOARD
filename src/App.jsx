import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayout from "./components/masterLayout/MasterLayout";
import ProductPage from "./pages/Product-Page";
import DashboardPage from "./pages/Dashboard-Page";
import InvoicePage from "./pages/Invoice-Page";
import ProfilePage from "./pages/Profile-Page";
import LoginPage from "./pages/Login-Page";
import RegisterPage from "./pages/Register-Page";
import ForgetPassword from "./pages/ForgetPassword-Page";
import OtpPage from "./pages/Otp-Page";
import ResetPassword from "./pages/ResetPassword-Page";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader";
import ProductUpload from "./pages/ProductUpload";
import ProductDelete from "./pages/ProductDelete";
import ProductUpdate from "./pages/ProductUpdate";
const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/dashboard" element={<DashboardPage />} /> 
          <Route path="/product" element={<ProductPage />} /> 
          <Route path="/ProductUpload" element={<ProductUpload />} /> 
          <Route path="/ProductDelete" element={<ProductDelete />} /> 
          <Route path="/ProductUpdate" element={<ProductUpdate />} /> 
          <Route path="/invoice" element={<InvoicePage />} /> 
          <Route path="/" element={<RegisterPage />} /> 
          <Route path="/forget-password" element={<ForgetPassword />} /> 
          <Route path="/verify-otp" element={<OtpPage />} /> 
          <Route path="/reset-password" element={<ResetPassword />} /> 
          <Route path="/profile" element={<ProfilePage />} />  
        </Routes>
      </BrowserRouter>
      {/* <FullScreenLoader />  */}
    </>
  )
}

export default App