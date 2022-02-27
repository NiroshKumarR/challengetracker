import { useEffect, useState } from "react";

export default function Commit() {
  // States
  const [commitMsg, setCommitMsg] = useState("");
  const [done, setDone] = useState(false);

  const dateCal = new Date();
  let day = dateCal.getDate();
  let month = dateCal.getMonth() + 1;
  let year = dateCal.getFullYear();
  let date = `${day}-${month}-${year}`;

  // Functions

  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("commitData"));

    if (localStorage.getItem("commitData")) {
      d.find((e) => (e.date === date ? setDone(true) : setDone(false)));
    }
  }, [done, date]);

  const saveData = () => {
    let d = JSON.parse(localStorage.getItem("commitData"));
    let yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
    if (localStorage.getItem("commitData")) {
      d.find((e) =>
        e.date === yesterday
          ? () => {
              localStorage.setItem(
                "commitData",
                JSON.stringify([
                  ...d,
                  {
                    data: commitMsg.replaceAll(" ", "").length,
                    date: date,
                  },
                ])
              );
              setDone(true);
            }
          : () => {
              localStorage.setItem(
                "commitData",
                JSON.stringify([
                  ...d,
                  {
                    data: 0,
                    date: yesterday,
                  },
                  {
                    data: commitMsg.replaceAll(" ", "").length,
                    date: date,
                  },
                ])
              );
              setDone(true);
            }
      );
    } else {
      localStorage.setItem(
        "commitData",
        JSON.stringify([
          {
            data: commitMsg.replaceAll(" ", "").length,
            date: date,
          },
        ])
      );
      setDone(true);
    }
    setCommitMsg("");
    window.location.reload();
  };
  const commit = () => {
    commitMsg.length !== 0 ? saveData() : alert("Enter data");
  };
  return (
    <div id="commitbox" className="w-full mx-5 my-10 p-5 lg:p-0">
      <div id="text-box">
        <label className="label" htmlFor="commitBox">
          <span className="label-text font-mono text-xl">Daily Task</span>
        </label>
        <textarea
          name="commitBox"
          className="textarea textarea-bordered w-full textarea-primary mb-2"
          placeholder="Daily Commit"
          value={commitMsg}
          onChange={(e) => setCommitMsg(e.target.value)}
        ></textarea>
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
