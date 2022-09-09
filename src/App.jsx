import React, { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';
import {v4 as uuidv4} from 'uuid';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livro',
      completed: true,
    },
    
]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {... task, completed: !task.completed}
      return task;
    });
    
    setTasks(newTasks)
  }



  const handleTaskAddition = (taskTitle) => {
      const newTask = [
        ... tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
     setTasks(newTask);
  }


  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
   
    </>
  );
};

export default App;