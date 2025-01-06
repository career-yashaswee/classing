import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { SplashScreen } from "@/components/app-wide/SplashScreen";
import Error from "@/components/app-wide/Error";
import Present from "@/modules/present/Present";

const Model = lazy(() => import("@/modules/avatar/Model"));
const GraphFlow = lazy(() => import("@/modules/graphflow/GraphFlow"));
const Dashboard = lazy(() => import("@/modules/dashboard/Dashboard"));
const Canvas = lazy(() => import("@/modules/canvas/Canvas"));

function ProtectedRoute() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <Routes>
          <Route path="/avatar" element={<Model />} />
          <Route path="/flow" element={<GraphFlow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/present" element={<Present />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default ProtectedRoute;
