import React from 'react'
import { useState } from 'react'

const CreateTask = ({onTaskCreated}) => {

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [taskCategory, setTaskCategory] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = JSON.parse(localStorage.getItem("employees"))
        
        data.forEach((element) => {
            if (assignTo == element.firstName) {
                const newTask = {
                    taskTitle,
                    taskDate,
                    taskCategory,
                    taskDescription,
                    active: false,
                    newTask: true,
                    complete: false,
                    failed: false
                }
                element.tasks.push(newTask)
                element.taskNumbers = { ...element.taskNumbers, newTask: element.taskNumbers.newTask + 1 }
                console.log(element.tasks)
                onTaskCreated(newTask)
            }
        })

        localStorage.setItem("employees", JSON.stringify(data))

        setTaskTitle("")
        setTaskDate("")
        setAssignTo("")
        setTaskCategory("")
        setTaskDescription("")
    }

  return (
    <div className="bg-[#1C1C1C] p-5 rounded-xl mt-10">
        <form onSubmit = {(e) => handleSubmit(e)} className="flex items-start justify-between">
            <div className="w-[45%]">
                <div>
                    <h3 className="text-xl">Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    required className="mb-5 w-[80%] bg-transparent border-2 border-rose-500 rounded-lg p-2 mt-2" type="text" placeholder='Make a UI Design'/>
                </div>
                <div>
                    <h3 className="text-xl">Date</h3>
                    <input 
                    value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value)
                    }}
                    required className="mb-5 w-[80%] bg-transparent border-2 border-rose-500 rounded-lg p-2 mt-2" type="date"/>
                </div>
                <div>
                    <h3 className="text-xl">Assign To</h3>
                    <input
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    required className="mb-5 w-[80%] bg-transparent border-2 border-rose-500 rounded-lg p-2 mt-2" type="text" placeholder='Employee Name'></input>
                </div> 
                <div>
                    <h3 className="text-xl">Category</h3>
                    <input
                    value={taskCategory}
                    onChange={(e)=>{
                        setTaskCategory(e.target.value)
                    }}
                    required className="mb-5 w-[80%] bg-transparent border-2 border-rose-500 rounded-lg p-2 mt-2" type="text" placeholder='design, dev, etc...'></input>
                </div>
                </div>
            <div>
                <div>
                    <h3 className="text-xl">Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    required rows="7" cols="80" className="mb-5 bg-transparent border-2 border-rose-500 rounded-lg p-2 mt-2" type="text"/>
                </div>
                <button className="text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center w-full">Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask