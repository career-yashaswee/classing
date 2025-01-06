import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SplashScreen } from "@/components/app-wide/SplashScreen";

const Home = lazy(() => import("@/modules/home/Home"));
const Error = lazy(() => import("@/components/app-wide/Error"));

function GeneralRoute() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default GeneralRoute;
