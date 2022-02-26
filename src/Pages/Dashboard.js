import { useEffect, useState } from "react";
import Commit from "../components/commit";
// import Stats from "../components/stats";
import Progressbar from "../components/progressbar";
import Stats from "../components/stats";

export default function Dashboard() {
  const [progressData, setProgressData] = useState("");
  const [heatMapdata, setHeatMapData] = useState("");
  let data1 = Number(localStorage.getItem("challengeType"));
  let data2 = JSON.parse(localStorage.getItem("commitData"));
  console.log(data1 % 50);
  // useEffect(()=>{
  //   let d = JSON.parse(localStorage.getItem())
  // },[])
  return (
    <div
      id="dashboard"
      className="lg:grid grid-flow-col grid-col-4 grid-rows-3 gap-10 mt-10 mx-20 h-screen"
    >
      <div
        id="commitForm"
        className="col-start-1 row-start-1 row-span-3 card shadow-2xl flex items-center justify-center lg:p-20"
      >
        <Commit />
      </div>
      <div
        id="stats"
        className="col-start-2 row-start-1 w-full lg:p-10 col-span-1 card card-bordered border-primary shadow-2xl lg:flex lg:flex-row flex-col gap-10 p-10 items-center justify-center"
      >
        <div>
          <h2 className="lg:text-xl font-bold">Your Progress so far</h2>
        </div>
        <Progressbar value={10} minValue={0} maxValue={100} text={10 * 100} />
      </div>
      <div>
        <Stats />
      </div>
    </div>
  );
}
