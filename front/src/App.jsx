import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'

import { Analyse } from "./components/Analyse";
import Home from "./components/Home";
import { General } from "./components/General";
import { Consultation } from "./components/Consultation";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ConfirmationCode } from "./components/ConfirmationCode";
import Summer from "./components/summer";
const isLoggedIn = ()=>{
  return localStorage.getItem("token")!==null;
};
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={ isLoggedIn() ? <General />: <Login />} />
         <Route path="/confirmation" element={<ConfirmationCode />} />
         <Route path="/register" element={<Register />} />
         <Route path="/analyse" element={<Analyse />} />
         <Route path="/consultation" element={<Summer />} />
      </Routes>
    </BrowserRouter>
    
  )
}