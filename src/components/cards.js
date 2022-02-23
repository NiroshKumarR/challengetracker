// import Card from "./card";
import productivework from "../assets/productivework.png";
import logo from "../assets/sample.jpg";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./cards.css";

export default function Cards({ accepted }) {
  const challenges = [
    { img: productivework, title: "100day", days: 100 },
    { img: logo, title: "60day", days: 60 },
    { img: productivework, title: "30day", days: 30 },
  ];

  const setChallenge = () => {
    // localStorage.setItem("challenge", index);
    localStorage.setItem("challengeDays", 20);

    accepted();
  };

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div id="cardlist">
      {/* className="carousel w-64 rounded-box" */}
      <motion.div ref={carousel} id="cardscarousel" className="carouselcard">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          id="cardscarousel"
          className="inner-carousel"
        >
          {challenges.map((challenge, i) => (
            <motion.div className="item" key={i}>
              <div id={`#item${i + 1}`}>
                <div id="card-head">
                  <img
                    className="pointer-events-none"
                    src={challenge.img}
                    alt="challenge images"
                  ></img>
                </div>
                <div id="actions">
                  <button className="btn ct-btn" onClick={setChallenge}>
                    Select
                  </button>
                </div>
              </div>
              {/* <Card
                img={challenge.img}
                imgId={`#item${i + 1}`}
                index={challenge.title}
                key={i}
                accepted={accepted}
                days={challenge.days}
              /> */}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
