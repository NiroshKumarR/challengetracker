import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Intro from "./Pages/Intro";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="intro" element={<Intro />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
