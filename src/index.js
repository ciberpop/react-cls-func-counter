import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassCounter from './ClassCounter';
import FuncCounter from './FuncCounter';

const App = () => (
    <div>
        <ClassCounter />
        <FuncCounter />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
