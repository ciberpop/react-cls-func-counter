import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassCounter from './ClassCounter';
import FuncCounter from './FuncCounter';
import CustomHook from './CustomHook';

const App = () => (
    <div>
        <ClassCounter />
        <FuncCounter />
        <CustomHook />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
