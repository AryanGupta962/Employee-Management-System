import './App.css'
import Login from "./components/Auth/Login.jsx";
import Employee from "./components/Dashboard/Employee.jsx";
import Admin from "./components/Dashboard/Admin.jsx";
import {useContext, useEffect, useState} from "react";
import  {AuthContext} from "./context/AuthProvider.jsx";
import {setLocalStorage} from "./utils/LocalStorage.jsx";
function App() {


    const [user, setUser] = useState(null);
    const [loggedInUser, setloggedInUser] = useState(null)
    useEffect(() => {
        setLocalStorage();
    }, );
    const authData = useContext(AuthContext)

    function loginHandler(email,password)
    {
        if(email==="admin.user@example.com"&&password==="123")
        {
            setUser("admin");
            localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
        }
        else if(authData[0]){
            const employee= authData[0].employees.find((e)=>e.email==email&&e.password==password)
            if(employee) {
                setUser("employee");
                setloggedInUser(employee)
                localStorage.setItem("loggedInUser", JSON.stringify({role: "employee"}));
            }
        }
        else
            alert("Invalid Credentials")
    }



    return (
    <>
        {!user?<Login loginHandler={loginHandler}/>:""}
        { user==='admin'?<Admin changeUser={setUser}/>:user==="employee"?<Employee changeUser={setUser} data={loggedInUser}/>:"" }
    </>
  )
}

export default App
