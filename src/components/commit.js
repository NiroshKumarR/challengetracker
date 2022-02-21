export default function Commit() {
  return (
    <div
      id="commitbox"
      className="flex gap-5 items-center justify-center card card-side p-10 shadow-2xl m-5"
    >
      <div id="text-box">
        <label className="label" htmlFor="commitBox">
          <span className="label-text font-mono">Daily Task</span>
        </label>
        <textarea
          name="commitBox"
          class="textarea textarea-bordered h-28"
          placeholder="Daily Commit"
        ></textarea>
      </div>
      <div id="actions" className="card-actions mt-10">
        <button className="btn ct-btn lowercase w-full font-mono">add .</button>
        <button className="btn ct-btn lowercase w-full font-mono">
          commit -m
        </button>
      </div>
    </div>
  );
}
