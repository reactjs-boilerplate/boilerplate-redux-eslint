import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './Redux/action/action';

const App = () => {
  const dispatch = useDispatch();
  const num = useSelector(state => state.counterReducer);

  return (
    <div className="App">
      React Eslint Boiler Plate
      <br />
      <button
        className="btn"
        type="button"
        onClick={() => dispatch(incrementAction())}
      >
        Addition
      </button>
      {'The Number comes from Redux '}
      {num.number}
      <button
        className="btn"
        type="button"
        onClick={() => dispatch(decrementAction())}
      >
        Deletion
      </button>
    </div>
  );
};

export default App;
