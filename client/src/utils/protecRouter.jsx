import {useContext} from "react"
import {GlobalContext} from "../context/index.jsx"

export const ProtectedRoute = ({children }) => {
    const TheContext = useContext(GlobalContext);
    const {user} = TheContext;

      if (!user) {
        console.log("não entrou")
        return (<h1>Erro 404</h1>)
      }

      return children;
    };