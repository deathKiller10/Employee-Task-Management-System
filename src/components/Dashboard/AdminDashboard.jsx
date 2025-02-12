import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'
import { useState, useEffect } from 'react'

const AdminDashboard = (props) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees"))
    const tasksObtained = data.reduce((acc, employee) => acc.concat(employee.tasks), []);
    setTasks(tasksObtained);
  }, []);

  const handleTaskCreated = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="screen w-full p-10 bg-black text-white">
        <Header changeUser={props.changeUser} data="Admin"/> 
        <CreateTask onTaskCreated={handleTaskCreated}/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard