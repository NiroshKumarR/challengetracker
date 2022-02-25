import sample from "../assets/sample.jpg";
import { Link } from "react-router-dom";
import Intro from "../components/intro";

export default function Home() {
  return (
    <div id="home" className="h-screen">
      <div id="name" className="mt-10">
        <h1 className="font-semibold text-4xl text-center">
          <span className="font-serif text-6xl">C</span>hallenge{" "}
          <span className="font-serif text-6xl">T</span>racker
        </h1>
      </div>
      <div id="into">
        <Intro />
      </div>
    </div>
  );
}
