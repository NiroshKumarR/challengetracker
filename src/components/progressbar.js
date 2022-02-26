export default function Progressbar({ value }) {
  const progress = {
    "--value": value,
    "--size": "10rem",
  };

  return (
    <div
      id="progressTracker"
      className="mx-auto flex items-center justify-center"
    >
      <div
        className="radial-progress bg-primary text-primary-content border-2 border-primary text-3xl"
        style={progress}
      >
        {progress["--value"]}%
      </div>
    </div>
  );
}
