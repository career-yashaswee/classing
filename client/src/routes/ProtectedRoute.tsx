import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SplashScreen } from "@/components/app-wide/SplashScreen";
import Session from "@/modules/dashboard/class/Session";
import LiveSession from "@/modules/dashboard/class/session/live/LiveSession";

const Viz = lazy(() => import("@/modules/viz/VizLibrary"));
const Video = lazy(() => import("@/modules/video/Video"));
const Subject = lazy(() => import("@/modules/dashboard/class/Subject"));
const Present = lazy(() => import("@/modules/present/Present"));
const Model = lazy(() => import("@/modules/avatar/Model"));
const GraphFlow = lazy(() => import("@/modules/graphflow/GraphFlow"));
const Error = lazy(() => import("@/components/app-wide/Error"));
const Dashboard = lazy(() => import("@/modules/dashboard/Dashboard"));
const Class = lazy(() => import("@/modules/dashboard/class/Class"));
const Canvas = lazy(() => import("@/modules/canvas/Canvas"));
const Analytics = lazy(() => import("@/modules/dashboard/analytics/Analytics"));
const Activity = lazy(() => import("@/modules/dashboard/class/Activity"));

function ProtectedRoute() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <Routes>ßßßß
          <Route path="/viz" element={<Viz />} />
          <Route path="/video" element={<Video />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/present" element={<Present />} />
          <Route path="/flow" element={<GraphFlow />} />
          <Route path="/class" element={<Class />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/avatar" element={<Model />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/session" element={<Session />} />
          <Route path="/session/:sessionID/present" element={<LiveSession />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default ProtectedRoute;
