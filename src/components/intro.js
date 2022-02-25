import Introcard from "./introcard";
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
    <div id="intro" className="lg:mx-56 lg:p-20">
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

      <div id="actions" className="lg:mt-10 lg:ml-72">
        {intro2 ? (
          <Link
            to="/challenge"
            className="btn btn-primary lg:btn-wide ml-20 lg:ml-0 w-1/2"
          >
            Lets Dive init
          </Link>
        ) : (
          <button
            data-theme="halloween"
            className="btn btn-primary lg:btn-wide ml-20 lg:ml-0 w-1/2"
            onClick={clickNest}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
