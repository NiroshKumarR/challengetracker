import Card from "./card";
import logo from "../assets/sample.jpg";

export default function Cards({ accepted }) {
  const challenges = [
    { img: logo, title: "100day", days: 100 },
    { img: logo, title: "60day", days: 60 },
    { img: logo, title: "30day", days: 30 },
  ];

  return (
    <div id="cardlist">
      <div
        id="cards"
        className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:m-5 lg:gap-10 rounded-3xl carousel carousel-vertical lg:p-5 h-screen lg:h-auto"
      >
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
