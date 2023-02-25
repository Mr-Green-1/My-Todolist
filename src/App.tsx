import React from 'react';
import './App.css';
import {Todolist, tasksType} from './Todolist';

function App() {
    let tasks1: tasksType[] = [
        {id: 1, title: 'Css', isDone: true},
        {id: 2, title: 'Js', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ];
    let tasks2: tasksType[] = [
        {id: 1, title: 'GGG', isDone: true},
        {id: 2, title: 'TTT', isDone: true},
        {id: 3, title: 'RRR', isDone: false},
    ];
    let tasks3: tasksType[] = [
        {id: 1, title: '111', isDone: true},
        {id: 2, title: '222', isDone: true},
        {id: 3, title: '333', isDone: false},
    ];
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
            <Todolist title="What to Buy" tasks={tasks3}/>
        </div>
    );
}

export default App;
