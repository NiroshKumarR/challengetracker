import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";

import ChallengeSelect from "./Pages/ChallengeSelect";
import Dashboard from "./Pages/Dashboard";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="challenge" element={<ChallengeSelect />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
