import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, useEffect, useState, lazy } from "react";

import { SplashScreen } from "@/components/app-wide/SplashScreen";

function ProtectedRoute() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <Routes></Routes>
      </Router>
    </Suspense>
  );
}

export default ProtectedRoute;
