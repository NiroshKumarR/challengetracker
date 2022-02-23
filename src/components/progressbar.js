export default function Progressbar() {
  const progress = {
    "--value": 20,
  };
  return (
    <div id="progressTracker">
      <div className="radial-progress  border-4" style={progress}>
        {progress["--value"]}%
      </div>
    </div>
  );
}
