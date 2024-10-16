import { useContext } from "react";
import { ColorContext } from "./App";

export function GrandChildrenComponent() {
    let {color, setColor} = useContext(ColorContext);
    return (
        <>
            <h3 style={{color: color}}>Grand Children</h3>
            <button onClick={() => {
                setColor("green");
            }}>Change Color</button>
        </>
    );
}