import Cards from "../components/cards";

export default function ChallengeSelect() {
  return (
    <div
      id="Challenge-Select"
      className="flex flex-col items-center justify-center gap-5 h-screen"
    >
      <div id="challenge-cards">
        <Cards />
      </div>
    </div>
  );
}
