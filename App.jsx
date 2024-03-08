/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';


function App() 
{
  const [tasks, setTasks] = useState(['Do laundry','Go to gym','Walk dog']);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask} tasks={tasks}/>
    </SafeAreaView>
  );
}

export default App;
