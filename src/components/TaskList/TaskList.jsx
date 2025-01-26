import Accept from "./Accept.jsx";
import New from "./New.jsx";
import Failed from "./Failed.jsx";
import Complete from "./Complete.jsx";

function TaskList({tasks}) {

    console.log(tasks)
    return (
        <div id={"tasklist"}
             className={"h-[40%] overflow-x-auto gap-x-5 flex items-center justify-start py-5 w-full mt-10 "}>
            { tasks.map((task,idx) => {
                if (task.new)
                    return <New key={idx} category={task.category} date={task.date} title={task.title} description={task.description}/>
                if(task.active)
                    return <Accept key={idx} category={task.category} date={task.date} title={task.title} description={task.description}/>
                if(task.completed)
                    return <Complete key={idx} category={task.category} date={task.date} title={task.title} description={task.description}/>
                if(task.failed)
                    return <Failed key={idx} category={task.category} date={task.date} title={task.title} descr iption={task.description}/>

            }) }

            {/*<Accept/>*/}
            {/*<New/>*/}
            {/*<Failed/>*/}
            {/*<Complete/>*/}
        </div>

    );
}

export default TaskList;