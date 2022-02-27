export default function Progressbar({ value }) {
  const progress = {
    "--value": value,
    "--size": "8rem",
  };

  return (
    <div
      id="progressTracker"
      className="mx-auto flex items-center justify-center"
    >
      <div
        className="radial-progress bg-primary text-primary-content lg:border-2 border-primary lg:text-3xl text-base"
        style={progress}
      >
        {progress["--value"]}%
      </div>
    </div>
  );
}
