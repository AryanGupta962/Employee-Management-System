import {useContext, useEffect, useState} from "react";
import {getLocalStorage} from "../../utils/LocalStorage.jsx";
import {AuthContext} from "../../context/AuthProvider.jsx";

function CreateTask() {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [taskAssignTo, setTaskAssign] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [userData,setUserData] = useContext(AuthContext)
    function titleHandler(e)
    {
        setTitle(e.target.value);
    }
    function dateHandler(e)
    {
        setDate(e.target.value);
    }
    function assignHandler(e)
    {
        setTaskAssign(e.target.value);
    }
    function categoryHandler(e)
    {
        setCategory(e.target.value);
    }
    function descriptionHandler(setter)
    {
        return function(e)
        {
            setter(e.target.value);
        }
    }

    const [task, setTask] = useState({})

    function submitHandler(e)
    {
        e.preventDefault();
        // setTitle("");
        // setDate("");
        // setTaskAssign("");
        // setCategory("");
        // setDescription("");
        setTask({title,category,date,description,taskAssignTo,active:false,new:true,completed:false,failed:true});
    }

    useEffect(() => {
        const data=userData.employees;
        console.log(data)
        data.forEach((emp)=>{
            if(emp.name===taskAssignTo)
            {
                //console.log(taskAssignTo,task)
                emp.tasks.push(task)
                if(task.new)
                    emp.taskCount.new++;
                if(task.active)
                    emp.taskCount.active++;
                if(task.completed)
                    emp.taskCount.completed++;
                if(task.failed)
                    emp.taskCount.failed++;
                localStorage.setItem("employees",JSON.stringify(data));
            }
        })
    }, [task]);


    return (
        <div>

            <form onSubmit={submitHandler} className={"flex rounded px-6 py-8 w-full bg-[#0C0D0D] items-start justify-between gap-x-56"}>
                <div className={"w-1/2 flex flex-col gap-y-2"}>
                    <div>
                        <h3 className={"mb-1"}>Task Title</h3>
                        <input onChange={titleHandler} value={title} className={"bg-transparent outline-none border rounded border-white py-1 px-2 w-full"}
                               type="text" placeholder={"Make a UI design"}/>
                    </div>
                    <div>
                        <h3 className={"mb-1"}>Date</h3>
                        <input onChange={dateHandler} value={date} className={"bg-transparent outline-none border rounded border-white py-1 px-2 w-full"}
                               type="date"/>
                    </div>
                    <div>
                        <h3 className={"mb-1"}>Assign to</h3>
                        <input onChange={assignHandler} value={taskAssignTo} className={"bg-transparent outline-none border rounded border-white py-1 px-2 w-full"}
                               type="text" placeholder={"Employee Name"}/>
                    </div>
                    <div>
                        <h3 className={"mb-1"}>Category</h3>
                        <input onChange={categoryHandler} value={category} className={"bg-transparent outline-none border rounded border-white py-1 px-2 w-full"}
                               type="text" placeholder={"design, dev, etc"}/>
                    </div>
                </div>

                <div className={"w-1/2 flex flex-col gap-y-2"}>
                    <h3>Description</h3>
                    <textarea onChange={descriptionHandler(setDescription)} value={description} className={"bg-transparent outline-none border rounded border-white "} cols="30"
                              rows="8"></textarea>
                    <button className={"bg-emerald-600 p-2 rounded"}>Create Task</button>
                </div>

            </form>

        </div>
    );
}

export default CreateTask;