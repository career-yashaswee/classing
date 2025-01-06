import { ChatProvider } from "@/hooks/use-chat";
import "./index.css";
import Classing from "./Classing";

export default function Model() {
  return (
    <div className="h-screen w-screen">
      <ChatProvider>
        <Classing />
      </ChatProvider>
    </div>
  );
}
