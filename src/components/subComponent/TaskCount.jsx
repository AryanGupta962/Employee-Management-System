import React from 'react';

function TaskCount({taskCount}) {
 // const taskcount={tasks}
    console.log(taskCount)
    return (
        <div className={"flex gap-x-5 gap-y-4  w-full "}>
            <div className={"bg-blue-400  px-8 py-6 rounded-lg w-[100%]"}>
                <h2 className={"text-3xl font-semibold"}>{taskCount.new}</h2>
                <h3 className={"text-xl  font-medium"}>New Task</h3>
            </div>
            <div className={"bg-green-400 px-8 py-6 rounded-lg w-[100%]"}>
                <h2 className={"text-3xl font-semibold"}>{taskCount.completed}</h2>
                <h3 className={"text-xl  font-medium"}>Completed Task</h3>
            </div>
            <div className={"bg-yellow-400 px-8 py-6 rounded-lg w-[100%]"}>
                <h2 className={"text-3xl font-semibold"}>{taskCount.active}</h2>
                <h3 className={"text-xl  font-medium"}>Accepted Task</h3>
            </div>
            <div className={"bg-red-400 px-8 py-6 rounded-lg w-[100%]"}>
                <h2 className={"text-3xl font-semibold"}>{taskCount.failed}</h2>
                <h3 className={"text-xl  font-medium"}>Failed Task</h3>
            </div>
        </div>
    );
}

export default TaskCount;