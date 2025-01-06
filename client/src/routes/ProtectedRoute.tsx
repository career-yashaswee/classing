import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { SplashScreen } from "@/components/app-wide/SplashScreen";

const Model = lazy(() => import("@/modules/avatar/Model"));
const GraphFlow = lazy(() => import("@/modules/graphflow/GraphFlow"));
const Dashboard = lazy(() => import("@/modules/dashboard/Dashboard"));
const Canvas = lazy(() => import("@/modules/canvas/Canvas"));
const Viz = lazy(() => import("@/modules/viz/VizLibrary"));
const Error = lazy(() => import("@/components/app-wide/Error"));
const Present = lazy(() => import("@/modules/present/Present"));
const Video = lazy(() => import("@/modules/video/Video"));
const Class = lazy(() => import("@/modules/dashboard/class/Class"));

function ProtectedRoute() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/flow" element={<GraphFlow />} />
          <Route path="/video" element={<Video />} />
          <Route path="/avatar" element={<Model />} />
          <Route path="/present" element={<Present />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/class" element={<Class />} />
          <Route path="/viz" element={<Viz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default ProtectedRoute;
