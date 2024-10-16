import { createContext, useState } from "react";
import { ChildComponent } from "./ChildComponent";
import { ChildComponent2 } from "./ChildComponent2";
export const ColorContext = createContext();

function App() {
  let [color, setColor] = useState("red");
  return (
    <>
      <ColorContext.Provider value={{ color, setColor }}> {/* Tạo kho chứa */}
        <h1 style={{ color: color }}>Hello App</h1>
        <ChildComponent />
        <ChildComponent2 />
      </ColorContext.Provider>
    </>
  );
}

export default App;
