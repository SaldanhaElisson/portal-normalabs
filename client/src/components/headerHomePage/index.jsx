import "./styles.css";
import { LogoEliLab } from "../logo";
import { NavHomePage } from "../navMenu";
import {useContext} from "react"
import {GlobalContext} from "../../context/index.jsx"

export const HeaderHomePage = () => {
  const TheContext = useContext(GlobalContext);
  const {user, setUser} = TheContext;

  console.log("aqui,",user.email)

  return (
    <div className={"headerHome"}>
      <div className="contentLog">
        <LogoEliLab />
      </div>
      <div className="contentNav">
        <h2 className="bemVindo"> Seja bem vindo, {user.nome}</h2>
        <NavHomePage />
        <div className="lineBlue"></div>
      </div>
    </div>
  );
};
