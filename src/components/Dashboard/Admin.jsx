import Header from "../subComponent/Header.jsx";
import CreateTask from "../subComponent/createTask.jsx";
import AllTask from "../subComponent/AllTask.jsx";

function Admin({changeUser}) {
    return (
        <div className={"h-screen w-full px-10"}>
            <Header changeUser={changeUser}/>
            <CreateTask/>
            <AllTask/>
        </div>
    );
}

export default Admin;