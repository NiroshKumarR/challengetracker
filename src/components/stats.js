import React from "react";
import Progressbar from "./progressbar";

export default function Stats() {
  return (
    <div
      id="stats"
      className="flex gap-5 items-center justify-center card card-side p-10 shadow-2xl m-5"
    >
      <div id="progressBar">
        <Progressbar value={10} minValue={0} maxValue={100} text={10 * 100} />
      </div>
      <div id="heatMap"></div>
    </div>
  );
}
