import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {decrement, decrementBy10, increment, incrementBy10, reset} from "../redux/counterSlice";
import './Counter.css';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    return (

        <div className="block">
            <div className='blockTwo'>
            <h1>Счетчик: {count}</h1>
            <div className='buttons'>
            <button className='one' onClick={() => dispatch(increment())}>+1</button>
            <button className="two" onClick={() => dispatch(decrement())}>-1</button>
            <button className='three' onClick={() => dispatch(reset())}>Reset</button>
            </div>
            </div>
        </div>
    );
}

export default Counter;