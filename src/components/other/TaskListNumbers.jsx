import React from 'react'

const TaskListNumbers = ({data}) => {

    let employee = {}

    const authData = JSON.parse(localStorage.getItem("employees"))
    for (let element of authData) {
        if (element.firstName == data.firstName) {
            employee = element
        }
    }

  return (
    <div className="flex mt-10 screen justify-between gap-5">
        <div className="w-[45%] py-6 px-9 bg-red-400 rounded-xl">
            <h2 className="text-3xl font-semibold">{employee.taskNumbers.newTask}</h2>
            <h3 className="text-xl font-medium">New Tasks</h3>
        </div>
        <div className="w-[45%] py-6 px-9 bg-blue-400 rounded-xl">
            <h2 className="text-3xl font-semibold">{employee.taskNumbers.active}</h2>
            <h3 className="text-xl font-medium">Active Tasks</h3>
        </div>
        <div className="w-[45%] py-6 px-9 bg-green-400 rounded-xl">
            <h2 className="text-3xl font-semibold">{employee.taskNumbers.complete}</h2>
            <h3 className="text-xl font-medium">Completed Tasks</h3>
        </div>
        <div className="w-[45%] py-6 px-9 bg-yellow-400 rounded-xl text-black">
            <h2 className="text-3xl font-semibold">{employee.taskNumbers.failed}</h2>
            <h3 className="text-xl font-medium">Failed Tasks</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers