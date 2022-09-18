import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counters.count);
    const dispatch = useDispatch();

    const [incrementAmt, setIncrementAmt] = useState(0);

    const addValue = Number(incrementAmt) || 0 ;

    const resetAll = () => {
      setIncrementAmt(0);
      dispatch(reset());
    }
    
  return (
    <section>
      <span>
        <p>{count}</p>
      </span>
      <span>
          <input 
              type="number"
              value={ incrementAmt }
              onChange={ e => setIncrementAmt(e.target.value) }
          />
      </span>
      <div>
        <button onClick={() => dispatch(incByAmount(addValue))}
        >Add Value</button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Minus</button>
        <button onClick={() => dispatch(resetAll)}>Reset</button>
      </div>
    </section>
  )
}

export default Counter
