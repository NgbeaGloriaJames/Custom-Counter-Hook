

// export default CounterComponent;
import React, { useState } from 'react';
import useCounter from './useCounter';
import './CounterComponent.css'; // Import the CSS file

function CounterComponent() {
  const counter = useCounter(0);
  const [updatedCount, setUpdatedCount] = useState('');

  const handleChange = (e) => {
    setUpdatedCount(e.target.value)
    e.target.value = updatedCount
  }
  const handleClick = (e) => {
    // SetUpdatedCount(e.target.value)
    // e.target.value = updatedCount
    counter.setValue(+updatedCount)
    setUpdatedCount('') 
  }
  return (
    <div className="counter-container">
      <h2 className="counter-value">Counter Value: {counter.count}</h2>
      <button className="counter-button" onClick={counter.increment}>
        Increment
      </button>
      <button className="counter-button" onClick={counter.decrement}>
        Decrement
      </button>
      <button className="counter-button reset" onClick={counter.reset}>
        Reset
      </button>
      <input
        type="number"
        value={ updatedCount }
        // onChange={(e) => counter.setValue(Number(e.target.value))}
        onChange={ handleChange }
        className="counter-value"
      />
      <button className="counter-button update" onClick={ handleClick }>
        Update Count
      </button>
    </div>
  );
}

export default CounterComponent;

