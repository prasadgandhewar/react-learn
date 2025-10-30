import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UseDefferedValue } from './hooks/UseDeffereValue';
import UseTransitionHook from './hooks/UseTransitionHook';

function App() {
  return (
    <div className="App">
      {/* <UseDefferedValue></UseDefferedValue> */}
      <UseTransitionHook></UseTransitionHook>
    </div>
  );
}

export default App;
