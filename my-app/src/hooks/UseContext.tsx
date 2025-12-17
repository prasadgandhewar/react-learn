import React from "react";
import { useContext } from "react";

const MyContext = React.createContext("default value");
const Context2 = React.createContext("dummy");

export default function UseContext() {
  return (
    <>
     <MyContext value="myContextParent">
      <Context2 value="Parent">
        <MyContext value="tes2t">
          <div>UseContext</div>
          <MyChildComponent />
        </MyContext>
      </Context2>
      </MyContext>
    </>
  );
}

function MyChildComponent() {
  const contextValue = useContext(MyContext);
  const contextValue2 = useContext(Context2);

  return (
    <>
      <div>MyChildComponent: {contextValue}</div>
      <div>MyChildComponent 2: {contextValue2}</div>
    </>
  );
}
