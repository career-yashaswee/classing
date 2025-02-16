import { lazy } from "react";
const ActivityDashboard = lazy(() => import("./activity/Activity"));
function Section() {
  return <ActivityDashboard />;
}

export default Section;
