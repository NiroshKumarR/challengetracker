export default function Introcard({ first_charc, text, img }) {
  return (
    <div
      id="intro-card"
      className="grid grid-flow-row grid-row-2 gap-5 lg:gap-2 lg:flex "
    >
      <div id="card-head" className="card lg:card-side lg:shadow-2xl">
        <div id="intro-img">
          <figure>
            <img src={img} className="h-96 px-2" alt="Intro illustration" />
          </figure>
        </div>
        <div id="card-body" className="card-body">
          <p className="lg:text-justify lg:text-xl lg:font-mono">
            <span className="text-3xl lg:text-5xl font-bold lg:font-semibold">
              {first_charc}
            </span>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
