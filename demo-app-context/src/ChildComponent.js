import { GrandChildrenComponent } from "./GrandChildrenComponent";

export function ChildComponent() {
  return (
    <>
      <hr />
      <h2>Child 1</h2>
      <GrandChildrenComponent/>
      <hr />
    </>
  );
}