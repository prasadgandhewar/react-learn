import React from "react";
import { useContext } from "react";

const MyContext = React.createContext("default value");

export default function UseContext() {
  return (
    <>
      <MyContext value="dark">
        <div>UseContext</div>
        <MyChildComponent />
      </MyContext>
    </>
  );
}

function MyChildComponent() {
    const contextValue = useContext(MyContext);
    
  return (
    <>
      <div>MyChildComponent: {contextValue}</div>
    </>
  );
}
