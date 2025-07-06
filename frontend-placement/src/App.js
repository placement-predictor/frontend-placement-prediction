// src/App.js
import React from "react";
import HeroSection from "./components/HeroSection";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
function App() {
  return (
    <div className="App">
        <BrowserRouter basename="/frontend-placement-prediction">
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
