import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import IndexPage from "./article/IndexPage";
import DetailPage from "./article/DetailPage";

function App() {
  return (
    <body style={{ backgroundColor: "#839695" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/article/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
