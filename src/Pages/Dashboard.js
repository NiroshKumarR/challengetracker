import Commit from "../components/commit";
import Stats from "../components/stats";

export default function Dashboard() {
  return (
    <div id="dashboard" className="flex items-center justify-center h-screen">
      <div
        id="dashboardItems"
        className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10"
      >
        <div id="commitForm">
          <Commit />
        </div>
        <div id="stats">
          <Stats />
        </div>
      </div>
    </div>
  );
}
