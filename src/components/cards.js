import Card from "./card";
import productivework from "../assets/productivework.png";
import logo from "../assets/sample.jpg";

export default function Cards() {
  const challenges = [
    { img: productivework, title: "100day" },
    { img: logo, title: "60day" },
    { img: productivework, title: "30day" },
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
          />
        ))}
      </div>
    </div>
  );
}
