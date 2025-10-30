import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UseDefferedValue } from './hooks/UseDeffereValue';
import UseTransitionHook from './hooks/UseTransitionHook';
import UseRef from './hooks/UseRef';
import UseContext from './hooks/UseContext';
import UseOptimistic from './hooks/UseOptimistic';

function App() {
  return (
    <div className="App">
      {/* <UseDefferedValue></UseDefferedValue> */}
      {/* <UseTransitionHook></UseTransitionHook> */}
      {/* <UseRef /> */}
      {/* <UseContext /> */}
      <UseOptimistic/>
    </div>
  );
}

export default App;
