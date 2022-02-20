import sample from "../assets/sample.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home" className="flex items-center justify-center h-screen">
      <div
        id="into"
        className="flex flex-col items-center justify-center gap-10"
      >
        <div id="logo">
          <img
            src={sample}
            className="rounded-full h-44"
            alt="Challenge Tracker Logo"
          />
        </div>
        <div id="actions">
          <Link to="/intro" className="btn ct-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
