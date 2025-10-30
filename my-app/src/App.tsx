import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UseDefferedValue } from './hooks/UseDeffereValue';
import UseTransitionHook from './hooks/UseTransitionHook';
import UseOptimisticHook from './hooks/UseOptimisticHook';

function App() {
  return (
    <div className="App">
      {/* <UseDefferedValue></UseDefferedValue> */}
      {/* <UseTransitionHook></UseTransitionHook> */}
      { <UseOptimisticHook></UseOptimisticHook> }
    </div>
  );
}

export default App;
