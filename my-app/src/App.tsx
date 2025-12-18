import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UseDefferedValue } from './hooks/UseDeffereValue';
import UseTransitionHook from './hooks/UseTransitionHook';
import UseRef from './hooks/UseRef';
import UseContext from './hooks/UseContext';
import UseOptimistic from './hooks/UseOptimistic';
import UseActionStateHook from './hooks/UseActionStateHook';
import UseActionState from './hooks/UseActionState';
import ErrorBoundry from './core/ErrorBoundry';
import { useLoaderData } from 'react-router-dom';
import Counter from './components/Counter';
import { CounterPlain } from './components/Counter-plain';
import { ToggleText } from './components/ToggleText';
import { SimpleForm } from './components/SimpleForm';
import { DebounceSearch } from './components/DebounceSearch';
import { DataFlow } from './components/DataFlow';
import { CounterWithReducer } from './components/CounterWithReducer';
import { DynamicForm } from './components/DynamicForm';
import { InfiniteScroll } from './components/InfiniteScrollWithHook';
import { InfiniteSCroll2 } from './components/InfiniteScroll2';

function App() {
  const data = useLoaderData();
  console.log(data)
  return (
    
    <div className="App">
        <InfiniteScroll></InfiniteScroll>
        <hr></hr>
        <DynamicForm></DynamicForm>
        <hr></hr>
        <CounterWithReducer></CounterWithReducer>
        <hr></hr>
        <DataFlow></DataFlow>
        <hr></hr>
        {/* <DebounceSearch></DebounceSearch>
        <hr></hr> */}
        <CounterPlain></CounterPlain> 
        <hr></hr>
        <ToggleText></ToggleText>
        <hr></hr>
        <SimpleForm></SimpleForm>
        {/* <Counter></Counter> */}

        {/* <UseDefferedValue></UseDefferedValue> */}
        {/* <UseTransitionHook></UseTransitionHook> */}
        {/* <UseRef /> */}
        {/* <UseContext /> */}
        {/* <UseOptimistic/> */}
        {/* <UseRef></UseRef> */}
        {/* <UseActionStateHook></UseActionStateHook> */}
        {/* <UseActionState></UseActionState> */}
    </div>
  );
}

export default App;
