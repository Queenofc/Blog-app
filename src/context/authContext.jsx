import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";
// to create duplicates of user information

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async(inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/login",inputs,{withCredentials:true});
        // withCredentials is added so that cookies are sent to the backend and it appears in the storage 
        setCurrentUser(res.data);
    }

    const logout = async(inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/logout");
        setCurrentUser(null);
    }
    //effect hook that stores user
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return ( 
    <AuthContext.Provider value = {{ currentUser, login, logout }}>
         { children }
    </AuthContext.Provider>
    );
};