import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Intro from "./Pages/Intro";
import ChallengeSelect from "./Pages/ChallengeSelect";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="intro" element={<Intro />} />
      <Route path="challenge" element={<ChallengeSelect />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
