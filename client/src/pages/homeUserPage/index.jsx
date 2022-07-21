import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/index.jsx"
import { HeaderHomePage } from "../../components/headerHomePage"
import { Outlet, Link } from "react-router-dom";

import "./style.css"

export const HomeUserPage = () => {
    const TheContext = useContext(GlobalContext);
    const { user, setUser } = TheContext;


    useEffect(() => {
        const localDateUser = JSON.parse(localStorage.getItem("dateUser"))
        setUser(localDateUser)
    }, [])

    return (
        <div className="MainhomePage">
            <HeaderHomePage />
            <div className="pages">
                <Outlet />
            </div>
        </div>
    )
}