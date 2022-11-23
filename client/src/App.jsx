import "./App.css";
import CreatePurchase from "./CreatePurchase";
import Navbar from "./Navbar";
import ViewPurchase from "./ViewPurchase";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewPurchase />} />
          <Route path="/create" element={<CreatePurchase />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;