import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const AllTasks = () => {

    // const authData = useContext(AuthContext)
    const authData = JSON.parse(localStorage.getItem("employees"))
    // console.log(authData)

    return (
        <div className="bg-[#1C1C1C] p-5 mt-5 rounded-lg">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h2 className="text-lg font-medium w-1/5">New Tasks</h2>
                <h2 className="text-lg font-medium w-1/5">Active Tasks</h2>
                <h2 className="text-lg font-medium w-1/5">Completed Tasks</h2>
                <h2 className="text-lg font-medium w-1/5">Failed Tasks</h2>
            </div>
            <div className=''>
            {authData.map((employee, index) => {
                return (
                    <div key={index} className=" border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                        <h2 className="text-lg font-medium w-1/5 text-white-600">{employee.firstName}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-red-400">{employee.taskNumbers.newTask}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-blue-400">{employee.taskNumbers.active}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-green-400">{employee.taskNumbers.complete}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-yellow-400">{employee.taskNumbers.failed}</h2>
                    </div>
                )
            })}
            </div>
            {/* {tasks.map((task, index) => {
                return (
                    <div key={index} className=" border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                        <h2 className="text-lg font-medium w-1/5 text-white-600">{task.firstName}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-red-400">{task.taskNumbers.newTask}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-blue-400">{task.taskNumbers.active}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-green-400">{task.taskNumbers.complete}</h2>
                        <h2 className="text-lg font-medium w-1/5 text-yellow-400">{task.taskNumbers.failed}</h2>
                    </div>
                )
            })} */}
        </div>
    )
}

export default AllTasks