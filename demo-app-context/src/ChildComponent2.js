import { useContext } from "react";
import { ColorContext } from "./App";

export function ChildComponent2() {
  let {color} = useContext(ColorContext);
    return (
      <>
      <hr/>
      <h2 style={{color: color}}>Child2</h2>
      <hr/>
      </>
    );
  }