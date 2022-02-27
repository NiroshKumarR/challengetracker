import Card from "./card";
import bats from "../assets/bats.png";
import vampire from "../assets/living-dead.png";
import ghosts from "../assets/ghosts.png";

export default function Cards({ accepted }) {
  const challenges = [
    { img: vampire, title: "100day", days: 100 },
    { img: bats, title: "60day", days: 60 },
    { img: ghosts, title: "30day", days: 30 },
  ];

  return (
    <div id="cardlist">
      <div
        id="cards"
        className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:m-5 lg:gap-20 rounded-3xl carousel carousel-vertical lg:p-5 h-screen lg:h-auto "
      >
        {challenges.map((challenge, i) => (
          <Card
            img={challenge.img}
            imgId={`#item${i + 1}`}
            key={i}
            accepted={accepted}
            days={challenge.days}
          />
        ))}
      </div>
    </div>
  );
}
