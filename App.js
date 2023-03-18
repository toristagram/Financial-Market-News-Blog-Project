import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import IndexPage from "./article/IndexPage";
import DetailPage from "./article/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/article/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
