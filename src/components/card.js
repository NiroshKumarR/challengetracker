export default function Card({ img, imgId, accepted, days }) {
  // Functions
  const setChallenge = () => {
    localStorage.setItem("challengeType", days);
    accepted();
  };
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl carousel-item mt-5 lg:mt-0 lg:hover:translate-y-5 transition-all ease-in duration-200 cursor-pointer lg:skew-x-12 lg:hover:skew-x-0 "
      id={imgId}
    >
      <figure>
        <img src={img} alt="challenge images" className="p-10 " />
      </figure>
      <div className="card-body">
        <h2 className="lg:text-4xl font-mono font-bold text-center">
          {days} days
        </h2>
        <p className="text-base p-2">{`This challenge is about ${days}, where you gotta commit everyday to keep in track.`}</p>
        <div className="justify-center card-actions mt-2">
          <button className="btn btn-primary" onClick={setChallenge}>
            Select Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
