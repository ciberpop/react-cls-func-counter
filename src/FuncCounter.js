import React, {useState} from 'react';
import './App.css';

function FuncCounter () {
    const [counter, setCounter] = useState(0);

    const incHandler = () => setCounter(() => counter + 1);

    const decHandler = () => setCounter(() => {
        return counter - 1 >= 0 ? counter - 1 : 0
    });

    return (
        <div className='counter'>
            <p>Function Counter</p>
            <h1>{counter}</h1>
            <button onClick={incHandler}>Increment</button>
            <button onClick={decHandler}>Decrement</button>
        </div>
    )
};

export default FuncCounter;
