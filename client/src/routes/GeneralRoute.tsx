import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, useEffect, useState, lazy } from "react";
import { SplashScreen } from "@/components/app-wide/SplashScreen";

const Home = lazy(() => import("@/modules/home/Home"));

function GeneralRoute() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default GeneralRoute;
