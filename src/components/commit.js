import { useEffect, useState } from "react";

export default function Commit() {
  // States
  const [commitMsg, setCommitMsg] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const date = new Date().toISOString().slice(0, 10);
  // Functions

  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("commitData"));

    if (localStorage.getItem("commitData")) {
      d.find((e) => {
        if (e.date === date) {
          setDone(true);
        }
      });
    } else {
      setDone(false);
    }
  }, [done, date]);

  const saveData = () => {
    let d = JSON.parse(localStorage.getItem("commitData"));
    let yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
    if (localStorage.getItem("commitData")) {
      d.find((e) => {
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
          setDone(true);
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
          setDone(true);
        }
      });
    } else {
      console.log("last else");
      localStorage.setItem(
        "commitData",
        JSON.stringify([
          {
            data: commitMsg.length,
            date: date,
          },
        ])
      );
      setDone(true);
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
          className="textarea textarea-bordered h-96 w-full textarea-primary mb-2"
          placeholder="Daily Commit"
          onChange={(e) => setCommitMsg(e.target.value)}
        ></textarea>
        <span className="label-text-alt font-bold text-primary mb-3">
          <sup className="text-lg text-red-500">*</sup> Keep Your Commit
          Descriptive, Long Commit gets More Data Points.
        </span>
      </div>
      <div id="actions" className="card-actions mt-5">
        <button
          onClick={commit}
          className={
            done
              ? "btn btn-disabled lowercase w-full font-mono lg:text-xl text-black"
              : "btn btn-primary lowercase w-full font-mono lg:text-xl text-black"
          }
        >
          commit -m
        </button>
      </div>
    </div>
  );
}
