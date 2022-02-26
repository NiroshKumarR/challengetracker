import { useRef } from "react";
import Commit from "../components/commit";
// import Stats from "../components/stats";
import Progressbar from "../components/progressbar";
import Stats from "../components/stats";

export default function Dashboard() {
  let progressData = useRef("");
  let heatMapdata = useRef([]);

  const checkData = () => {
    let data1 = Number(localStorage.getItem("challengeType"));
    let data2 = JSON.parse(localStorage.getItem("commitData"));
    progressData.current = data2.length % data1;
    data2.forEach((e) => {
      heatMapdata.current.push(e.data);
    });
  };

  checkData();

  return (
    <div
      id="dashboard"
      className="lg:grid grid-flow-col grid-col-4 grid-rows-3 lg:gap-10 lg:mt-10 lg:mx-20 h-screen lg:p-20 p-5 space-y-10"
    >
      <div
        id="commitForm"
        className="col-start-1 row-start-1 row-span-3 card shadow-2xl flex items-center justify-center lg:p-20"
      >
        <Commit />
      </div>
      <div
        id="stats"
        className="flex flex-row items-center justify-center gap-5 p-10"
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
        <Stats heatMapdata={heatMapdata.current} />
      </div>
    </div>
  );
}
