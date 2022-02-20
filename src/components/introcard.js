export default function Introcard({ first_charc, text, img }) {
  return (
    <div id="intro-card" className="grid grid-flow-row grid-row-2 gap-5">
      <div id="card-head" className="card">
        <div id="intro-img">
          <img src={img} alt="Intro illustration" />
        </div>
      </div>
      <div id="card-body" className="card-body">
        <p>
          <span className="text-3xl font-bold">{first_charc}</span> {text}
        </p>
      </div>
    </div>
  );
}
