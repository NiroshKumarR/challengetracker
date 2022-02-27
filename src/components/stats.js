import React from "react";
import { Heatmap } from "react-heatmap-github";

export default function Stats({ title, heatMapdata }) {
  return (
    <div id="stats" className="p-10 card card-bordered border-primary">
      <h3 className="text-3xl font-bold font-mono uppercase mb-5 text-center">
        {title}
        <span className="divider"></span>
      </h3>
      <div className="p-5 rounded-xl">
        <Heatmap values={heatMapdata} />
      </div>
    </div>
  );
}
