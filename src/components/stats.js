import React from "react";
import { Heatmap } from "react-heatmap-github";

export default function Stats({ values, title = "100 day challenge" }) {
  return (
    <div id="stats" className="p-10 card card-bordered border-primary">
      <h3 className="text-3xl font-bold font-mono uppercase mb-5 text-center">
        {title}
        <span className="divider"></span>
      </h3>
      <div className="p-5 rounded-xl">
        <Heatmap
          values={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 2, 3, 4, 0, 1, 23, 2]}
        />
      </div>
    </div>
  );
}
