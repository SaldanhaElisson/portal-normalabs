import {useContext} from "react"
import {GlobalContext} from "../../context/index.jsx"

export const HomeUserPage = () =>{
    const TheContext = useContext(GlobalContext);
    const {user, setUser} = TheContext;

    return(
   
        <h1>Logado com sucesso</h1>
    )
}