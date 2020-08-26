import React, {useState} from 'react';

const CustomHook = () => {
    function useCounter({myState}) {
        const [counter, setCounter] = useState(myState);
        const incHandler = () => setCounter(() => counter + 1);
        const decHandler = () => setCounter(() => {
            return counter -1 >= 0 ? counter -1 : 0
        });

        return [counter, {incHandler, decHandler}];
    }

    const [counter, {incHandler, decHandler}] = useCounter({myState: 0});

    return (
        <div className='counter'>
            <p>Custom Hook Counter</p>
            <h1>{counter}</h1>
            <button onClick={incHandler}>Increment</button>
            <button onClick={decHandler}>Decrement</button>
        </div>
    )
};

export default CustomHook;
