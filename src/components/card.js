export default function Card({ img, imgId, index, accepted, days }) {
  // Functions
  const setChallenge = () => {
    // localStorage.setItem("challenge", index);
    localStorage.setItem("challengeDays", days);

    accepted();
  };
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl carousel-item mt-5 lg:mt-0"
      id={imgId}
    >
      <figure>
        <img
          src={img}
          alt="challenge images"
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{days} days</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-center card-actions">
          <button className="btn btn-primary" onClick={setChallenge}>
            Select Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
