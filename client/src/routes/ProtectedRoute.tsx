import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { SplashScreen } from "@/components/app-wide/SplashScreen";
import Error from "@/components/app-wide/Error";
import Present from "@/modules/present/Present";
const Model = lazy(() => import("@/modules/avatar/Model"));
const GraphFlow = lazy(() => import("@/modules/graphflow/GraphFlow"));
const Dashboard = lazy(() => import("@/modules/dashboard/Dashboard"));

function ProtectedRoute() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <Routes>
          <Route
            path="/avatar"
            element={
              <div className="h-screen w-screen">
                <Model />
              </div>
            }
          />
          <Route path="/flow" element={<GraphFlow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
          <Route path="/present" element={<Present />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default ProtectedRoute;
