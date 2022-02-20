import Introcard from "../components/introcard";
import productiveWork from "../assets/productivework.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  // Variables and states
  const [intro, setIntro] = useState(true);
  const [intro2, setIntro2] = useState(false);

  // Functions
  const clickNest = () => {
    setIntro(false);
    setIntro2(true);
  };
  return (
    <div
      id="intro"
      className="flex flex-col m-10 items-center justify-center h-screen"
    >
      {intro ? (
        <div id="intro1">
          <Introcard
            text={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }
            img={productiveWork}
            first_charc={"The1"}
          />
        </div>
      ) : (
        <div id="intro1">
          <Introcard
            text={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }
            img={productiveWork}
            first_charc={"The2"}
          />
        </div>
      )}

      <div id="actions">
        {intro2 ? (
          <Link to="/challenge" className="btn ct-btn btn-wide">
            Lets Dive init
          </Link>
        ) : (
          <button className="btn ct-btn btn-wide" onClick={clickNest}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
