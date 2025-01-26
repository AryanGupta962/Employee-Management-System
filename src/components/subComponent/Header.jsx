import {useEffect, useState} from "react";


function Header({name,changeUser}) {
    //console.log(data)
     const [us, setUsername] = useState('');
    useEffect(()=>{
        if(!name)
            setUsername("Admin")
        else {
            setUsername(name)
        }
    },[us])

    function logOutUser()
    {
        localStorage.setItem("loggedInUser"," ")
        changeUser("")
       // window.location.reload();
    }

    return (
        <div className={"flex items-end justify-between py-12"}>
            <h1 className={"text-2xl"}>Hello <br/><span className={"text-3xl font-bold"}>{us} 👋</span> </h1>
            <button onClick={logOutUser} className={"bg-red-600 px-5 py-2 font-medium text-lg rounded"}>Log Out</button>
        </div>
    );
}

export default Header;