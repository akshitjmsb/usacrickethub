import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-3xl font-bold text-blue-700">Hello, USA Cricket Hub!</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
