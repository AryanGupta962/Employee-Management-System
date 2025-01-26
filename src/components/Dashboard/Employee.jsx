import Header from "../subComponent/Header.jsx";
import TaskCount from "../subComponent/TaskCount.jsx";
import TaskList from "../TaskList/TaskList.jsx";

function Employee({data,changeUser}) {
    const {name}= data;
    const {taskCount}=data;
    const {tasks}=data;
    //console.log(tasks);
    return (
        <div className={"h-full px-12"}>
            <Header name={name} changeUser={changeUser}/>
            <TaskCount taskCount={taskCount} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default Employee;