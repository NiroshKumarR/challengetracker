import Introcard from "./introcard";
import thinkingemoji from "../assets/castle.png";
import cuteemoji from "../assets/halloween.png";
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
              " Hey Hii, Thank you for coming by. I've created this simple App to keep track the challenges we take in the tech world like #100dayChallenge."
            }
            img={thinkingemoji}
            first_charc={"👋"}
          />
        </div>
      ) : (
        <div id="intro1">
          <Introcard
            text={
              " Okay all you gotta do is select a Card shown in the next page."
            }
            img={cuteemoji}
            first_charc={"👉"}
          />
        </div>
      )}

      <div id="actions" className="lg:mt-10 lg:ml-72">
        {intro2 ? (
          <Link
            to="/challenge"
            className="btn btn-primary lg:btn-wide ml-20 lg:ml-0 w-1/2 "
          >
            Lets Dive init
          </Link>
        ) : (
          <button
            data-theme="halloween"
            className="btn btn-primary lg:btn-wide ml-20 lg:ml-0 w-1/2 "
            onClick={clickNest}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
