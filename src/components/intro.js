import Introcard from "./introcard";
import castle from "../assets/castle.png";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div id="intro" className="lg:mx-56 lg:p-20">
      <div id="intro1">
        <Introcard
          text={
            " Hey Hii, Thank you for coming by. I've created this simple App to keep track the challenges we take in the tech world like #100dayChallenge. And all you gotta do is select a Card shown in the next page. This is a wIP project."
          }
          img={castle}
          first_charc={"👋"}
        />
      </div>

      <div id="actions" className="lg:mt-10 lg:ml-72">
        <Link
          to="/challenge"
          className="btn btn-primary lg:btn-wide ml-20 lg:ml-0 w-1/2 "
        >
          Lets Dive init
        </Link>
      </div>
    </div>
  );
}
