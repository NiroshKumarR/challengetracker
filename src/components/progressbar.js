export default function Progressbar() {
  const progress = {
    "--value": 20,
    "--size": "10rem",
  };
  return (
    <div id="progressTracker">
      <div className="radial-progress  border-4 text-2xl" style={progress}>
        {progress["--value"]}%
      </div>
    </div>
  );
}
