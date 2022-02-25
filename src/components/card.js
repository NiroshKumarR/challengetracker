export default function Card({ img, imgId, index, accepted, days }) {
  // Functions
  const setChallenge = () => {
    // localStorage.setItem("challenge", index);
    localStorage.setItem("challengeDays", days);

    accepted();
  };
  return (
    <div
      className="w-full carousel-item flex-col items-center justify-center"
      id={imgId}
    >
      <div id="card-head">
        <img src={img} alt="challenge images"></img>
      </div>
      <div id="actions">
        <button className="btn ct-btn" onClick={setChallenge}>
          Select
        </button>
      </div>
    </div>
  );
}
