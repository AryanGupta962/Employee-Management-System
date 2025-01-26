import {useState} from "react";
import log from "eslint-plugin-react/lib/util/log.js";

function Login({loginHandler}) {

    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("");

    function submitHandler(e)
    {
        e.preventDefault();
        loginHandler(email,password);
        setEmail("");
        setPassword("");
    }
    function emailHandler(e)
    {
        setEmail(e.target.value);
    }
    function passwordHandler(e)
    {
        setPassword(e.target.value);
    }

    return (
        <div className={"flex h-screen w-screen items-center justify-center"}>
            <div className={"border-2 rounded-xl border-emerald-600 p-20"}>
                <form onSubmit={submitHandler} className={"flex flex-col gap-y-3 items-center justify-center"}>
                    <input onChange={emailHandler} value={email} required className={" outline-none bg-transparent placeholder:text-gray-400 " +
                        "border-2 rounded-full border-emerald-600 py-3 px-5 text-xl"} type="email" placeholder={"Enter Your email"}/>
                    <input onChange={passwordHandler} value={password} required className={"outline-none bg-transparent placeholder:text-gray-400 " +
                        "border-2 rounded-full border-emerald-600 py-3 px-5 text-xl"} type="password" placeholder={"Enter password"}/>
                    <button className={"text-white outline-none bg-emerald-600 placeholder:text-white " +
                        "border-none rounded-full mt-6 py-3 w-full text-xl"}>Log in</button>
                </form>

            </div>
        </div>
    );
}

export default Login;