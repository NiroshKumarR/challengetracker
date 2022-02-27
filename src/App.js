import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      (localStorage.getItem("challengeDays") &&
        localStorage.getItem("challengeType")) ||
      localStorage.getItem("commitData")
    ) {
      navigate("/dashboard");
    }
  });

  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
