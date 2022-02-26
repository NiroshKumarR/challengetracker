import { useState } from "react";

export default function Commit() {
  // States
  const [commitMsg, setCommitMsg] = useState("");
  const [error, setError] = useState(false);

  const date = new Date().toISOString().slice(0, 10);
  // Functions

  const saveData = () => {
    let d = JSON.parse(localStorage.getItem("commitData"));
    let yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
    if (localStorage.getItem("commitData")) {
      d.find((e, i) => {
        // console.log(e.date === yesterday, i);
        if (e.date === yesterday) {
          console.log("2nd if");
          localStorage.setItem(
            "commitData",
            JSON.stringify([
              ...d,
              {
                data: commitMsg.length,
                date: date,
              },
            ])
          );
        } else {
          console.log("2rd else");
          localStorage.setItem(
            "commitData",
            JSON.stringify([
              ...d,
              {
                data: 0,
                date: yesterday,
              },
              {
                data: commitMsg.length,
                date: date,
              },
            ])
          );
        }
      });
    } else {
      console.log("last else");
      localStorage.setItem(
        "commitData",
        JSON.stringify([
          {
            data: commitMsg.length,
            date: yesterday,
          },
        ])
      );
    }

    console.log(localStorage.getItem("commitData"));
  };
  const commit = () => {
    commitMsg.length !== 0 ? saveData() : setError(true);
  };
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
          onChange={(e) => setCommitMsg(e.target.value)}
        ></textarea>
      </div>
      <div id="actions" className="card-actions mt-5">
        <button
          onClick={commit}
          className="btn btn-primary lowercase w-full font-mono lg:text-xl text-black"
        >
          commit -m
        </button>
      </div>
    </div>
  );
}
