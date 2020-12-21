import React from 'react';
import TaskList from './TaskList';

function App() {
  const tasks = [
    {id: 0, description: 'do this', done: false},
    {id: 1, description: 'do that', done: false},
  ];
  return (
    <div>
      <TaskList />
    </div>
  );
}

export default App;
