import { useState } from "react";
import { Content } from "./Content";
import { DemoEx } from "./DemoEx";
import { DemoInput } from "./DemoInput";
import { DemoProp } from "./DemoProp";
import { LifeCycle } from "./LifeCycle";

function App() { //Function Component
  // let count = 0;
  // return (
  //   <div>
  //     {/* <Content></Content> */}
  //     {/* <DemoInput/> */}
  //     {/* <DemoEx/> */}
  //     {/* <DemoProp name="Linh" age="22"/> */}
  //   </div>
  // );

  let [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow ? <LifeCycle></LifeCycle> : ''}
      <button onClick={() => {
        setIsShow(!isShow)
      }}>Nhấn</button>
    </>
  )
}


export default App;
