import { createContext, useState } from "react";
import { UserGlobal } from "./dataUser"

export const GlobalContext = createContext();

export const DateContext = ({children}) =>{
    const  [user, setUser] = useState(UserGlobal);

    return (
    <GlobalContext.Provider value={{user, setUser}}> {children} </GlobalContext.Provider>
    )
}