import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Commit from "../components/commit";
import Progressbar from "../components/progressbar";
import Stats from "../components/stats";

export default function Dashboard() {
  let progressData = useRef("");
  let heatMapdata = useRef([]);
  let navigate = useNavigate();

  const checkData = () => {
    if (localStorage.getItem("commitData")) {
      let data1 = Number(localStorage.getItem("challengeType"));
      let data2 = JSON.parse(localStorage.getItem("commitData"));
      progressData.current = Math.round((data2.length / data1) * 100);
      data2.forEach((e) => {
        heatMapdata.current.push(e.data);
      });
    }
  };

  checkData();

  const resetData = () => {
    localStorage.removeItem("commitData");
    localStorage.removeItem("challengeDays");
    localStorage.removeItem("challengeType");
    navigate("/");
  };
  return (
    <>
      <div
        id="dashboard"
        className="lg:grid grid-flow-col grid-cols-2 grid-rows-2 lg:p-10 p-5 lg:gap-5 h-screen"
      >
        <div
          id="commitForm"
          className="card shadow-2xl flex items-center justify-center lg:p-20 card-bordered border-primary"
        >
          <Commit />
        </div>

        <div
          id="stats"
          className="flex flex-row items-center justify-center gap-2 col-start-2 card card-bordered border-primary p-20"
        >
          <div>
            <h2 className="lg:text-3xl text-xl font-semibold font-mono">
              Your Progress so far, for {heatMapdata.current.length} days
            </h2>
          </div>
          <Progressbar
            value={progressData.current}
            minValue={0}
            maxValue={100}
            text={10 * 100}
          />
        </div>
        <div className="col-span-2 p-2">
          <Stats
            heatMapdata={heatMapdata.current}
            title={`${localStorage.getItem("challengeType")} day challenge`}
          />
          <div className="flex items-end lg:justify-end justify-center mt-4">
            <button onClick={resetData} className="btn btn-primary btn-sm">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
