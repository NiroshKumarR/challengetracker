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
        className="lg:grid grid-flow-col grid-col-4 grid-rows-3 lg:gap-10 lg:mt-10 lg:mx-20 h-screen lg:p-20 p-5 space-y-10"
      >
        <div
          id="commitForm"
          className="col-start-1 row-start-2 row-span-2 card shadow-2xl flex items-center justify-center lg:p-20"
        >
          <Commit />
        </div>

        <div
          id="stats"
          className="flex flex-row items-center justify-center gap-5 p-10 row-start-1"
        >
          <div>
            <h2 className="lg:text-xl font-bold font-mono">
              Your Progress so far
            </h2>
          </div>
          <Progressbar
            value={progressData.current}
            minValue={0}
            maxValue={100}
            text={10 * 100}
          />
        </div>
        <div>
          <Stats
            heatMapdata={heatMapdata.current}
            title={`${localStorage.getItem("challengeType")} day challenge`}
          />
          <div className="flex items-end lg:justify-end justify-center my-10 ">
            <button onClick={resetData} className="btn btn-primary btn-sm">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
