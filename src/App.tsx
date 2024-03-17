import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const counter = useSelector((state:any)=>{
    return state.counter;
  });

  const onIncrementClickHandler = ()=>{
    dispatch({type:'Increment'});
  };

  const onDecrementClickHandler = ()=>{
    dispatch({type:'Decrement'});
  };

  return (
    <div className="App">

      counter : {counter}
      <br /><br />
      <button onClick={onIncrementClickHandler}>Increment</button> &nbsp;
      <button onClick={onDecrementClickHandler}>Decrement</button>

    </div>
  );
}

export default App;