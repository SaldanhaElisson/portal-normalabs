import { createContext, useState, useEffect } from "react";
import { handleHomePage } from "../utils/handles";
import { UserGlobal } from "./dataUser"

export const GlobalContext = createContext();

export const DateContext = ({children}) =>{
    const  [user, setUser] = useState(UserGlobal);

    return (
    <GlobalContext.Provider value={{user, setUser}}> {children} </GlobalContext.Provider>
    )
}