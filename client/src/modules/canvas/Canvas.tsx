import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import "./Canvas.css";
import { Presentation } from "lucide-react";

function Canvas() {
  return (
    <>
      <div style={{ height: "100vh" }} className="classing-canvas">
        <Excalidraw
          zenModeEnabled={true}
          gridModeEnabled={true}
          validateEmbeddable={true}
          renderCustomStats={() => (
            <p style={{ fontWeight: "bold" }}>Classing</p>
          )}
        >
          <MainMenu>
            <MainMenu.Item
              onSelect={() => (window.location.href = "/present")}
              shortcut="Shift+P"
              icon={<Presentation />}
            >
              Switch to Presenter
            </MainMenu.Item>
            <MainMenu.DefaultItems.ToggleTheme />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
        </Excalidraw>
      </div>
    </>
  );
}
export default Canvas;
