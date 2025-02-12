import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full w-[450px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="px-3 py-1 rounded bg-red-600 text-sm">{data.taskCategory}</h3>
            <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="mt-2">{data.taskDescription
          }</p>
        <div className="mt-7">
            <button className="w-full py-1 px-2 text-sm rounded-lg border-2 border-green-700 bg-green-600">Completed</button>
        </div>
    </div>
  )
}

export default CompleteTask