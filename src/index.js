import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </div>
  </Router>
);
