import React from 'react';
import './App.css';
import {TodoCard} from "./components/TodoCard";

function App() {
    return (
        <div className="app">
            <h1 className={'title'}>todos</h1>

            <TodoCard />
        </div>
    );
}

export default App;
