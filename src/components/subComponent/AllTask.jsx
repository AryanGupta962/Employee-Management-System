import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthProvider.jsx";

function AllTask(props) {

    const authData = useContext(AuthContext);
    console.log(authData.employees)
    return (
        <div className={'bg-[#0C0D0D] mt-6 rounded px-6 py-8'}>

            <div className={"bg-red-400 py-2 px-4 mb-2 flex justify-between rounded"}>
            <h2 className={"font-medium w-1/5"}>Employee Name</h2>
            <h3 className={"font-medium w-1/5"}>New Task</h3>
            <h5 className={"font-medium w-1/5"}>Active TAsk</h5>
            <h5 className={"font-medium w-1/5"}>Completed</h5>
            <h5 className={"font-medium w-1/5"}>Failed</h5>
            </div>

            <div >
                { authData[0].employees.map((emp, idx) => {
                    return <div key={idx} className={" border border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded"}>
                        <h2 className={"font-medium text-lg text-white w-1/5"}>{emp.name}</h2>
                        <h3 className={"font-medium text-lg text-blue-500 w-1/5"}>{emp.taskCount.new}</h3>
                        <h5 className={"font-medium text-lg text-yellow-500 w-1/5"}>{emp.taskCount.active}</h5>
                        <h5 className={"font-medium text-lg text-green-500 w-1/5"}>{emp.taskCount.completed}</h5>
                        <h5 className={"font-medium text-lg text-red-500 w-1/5"}>{emp.taskCount.failed}</h5>

                    </div>

                })}
            </div>

        </div>
    );
}

export default AllTask;