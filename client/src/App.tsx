import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import GeneralRoute from "./routes/GeneralRoute";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SignedOut>
        <SignInButton />
        <GeneralRoute />
      </SignedOut>
      <SignedIn>
        <ProtectedRoute />
        {/* <UserButton /> */}
      </SignedIn>
    </div>
  );
}
