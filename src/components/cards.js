import Card from "./card";
import productivework from "../assets/productivework.png";
import logo from "../assets/sample.jpg";

export default function Cards({ accepted }) {
  const challenges = [
    { img: productivework, title: "100day", days: 100 },
    { img: logo, title: "60day", days: 60 },
    { img: productivework, title: "30day", days: 30 },
  ];

  return (
    <div id="cardlist">
      <div id="cards" className="carousel w-64 rounded-box">
        {challenges.map((challenge, i) => (
          <Card
            img={challenge.img}
            imgId={`#item${i + 1}`}
            index={challenge.title}
            key={i}
            accepted={accepted}
            days={challenge.days}
          />
        ))}
      </div>
    </div>
  );
}
