import React from 'react';
import { TodoList } from './components/Todolist';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
