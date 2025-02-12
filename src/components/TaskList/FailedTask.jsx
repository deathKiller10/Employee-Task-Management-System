import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full w-[450px] p-5 bg-yellow-400 rounded-xl text-black">
        <div className="flex justify-between items-center">
            <h3 className="px-3 py-1 rounded bg-red-600 text-sm text-white">{data.taskCategory}</h3>
            <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="mt-2">{data.taskDescription}</p>
    </div>
  )
}

export default FailedTask