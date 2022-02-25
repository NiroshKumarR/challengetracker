export default function Progressbar() {
  const progress = {
    "--value": 20,
    "--size": "10rem",
    "background-image":
      "radial-gradient(hsla(var(--bc)/.2) .5px,hsla(var(--b2)/1) .5px)",
  };

  return (
    <div
      id="progressTracker"
      className="mx-auto flex items-center justify-center"
    >
      <div
        className="radial-progress bg-primary text-primary border-4 border-primary  text-3xl"
        style={progress}
      >
        {progress["--value"]}%
      </div>
    </div>
  );
}
