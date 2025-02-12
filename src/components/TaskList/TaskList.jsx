import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    let employee = {}

    const authData = JSON.parse(localStorage.getItem("employees"))
    for (let element of authData) {
        if (element.firstName == data.firstName) {
            employee = element
        }
    }

    return (
        <div id="taskList" className="h-[70%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
            {employee.tasks.map((task, index) => {
                if (task.newTask){
                    return <NewTask key={index} data={task} />
                }
                if (task.active){
                    return <AcceptTask key={index} data={task}/>
                }
                if (task.complete){
                    return <CompleteTask key={index} data={task}/>
                }
                if (task.failed){
                    return <FailedTask key={index} data={task}/>
                }
            })}
        </div>
    )
}

export default TaskList