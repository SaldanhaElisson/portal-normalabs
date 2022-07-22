import "./style.css"

import { useContext } from "react"
import { GlobalContext } from "../../context/index.jsx"
import { LogoEliLab } from "../logo/index"

export const CrachaFrente = () => {
    const TheContext = useContext(GlobalContext);
    const { user, setUser } = TheContext;
    return (
        <div className="contentCracha">
            <div className="contentLogo">
                <LogoEliLab id="logoCracha" />
            </div>
            <div className="contentInfo" >
                <object data={" "} type="image/png" className="imgUserCracha">
                  <div className="imgUserCracha"></div>
                </object>
                <p className="tileName">{user.nome}</p>
                <p className="titleCargo"> {user.cargo}</p>
            </div>

            <link rel="stylesheet" href="" />
        </div>
    )
}