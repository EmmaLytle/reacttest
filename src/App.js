import React from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <Dropdown />
    </div>
  );
}

export default App;
