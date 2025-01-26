import {createContext, useEffect, useState} from "react";
import {getLocalStorage} from "../utils/LocalStorage.jsx";

export const AuthContext=createContext();
function AuthProvider({children}) {

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const {employees}=getLocalStorage();
        setUserData({employees})
    }, []);
    return (
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;