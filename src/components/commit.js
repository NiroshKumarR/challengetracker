export default function Commit() {
  return (
    <div id="commitbox" className="w-full mx-5 my-10">
      <div id="text-box">
        <label className="label" htmlFor="commitBox">
          <span className="label-text font-mono text-xl">Daily Task</span>
        </label>
        <textarea
          name="commitBox"
          className="textarea textarea-bordered h-96 w-full textarea-primary"
          placeholder="Daily Commit"
        ></textarea>
      </div>
      <div id="actions" className="card-actions mt-5">
        <button className="btn btn-primary lowercase w-full font-mono lg:text-xl text-black">
          commit -m
        </button>
      </div>
    </div>
  );
}
