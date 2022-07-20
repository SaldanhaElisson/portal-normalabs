import {useContext} from "react"
import {GlobalContext} from "../../context/index.jsx"
import {HeaderHomePage} from "../../components/headerHomePage"

export const HomeUserPage = () =>{
    const TheContext = useContext(GlobalContext);
    const {user, setUser} = TheContext;

    return(
        <HeaderHomePage />
        
    )
}