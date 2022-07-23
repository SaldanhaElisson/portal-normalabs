import "./style.css"
import "./style-responsive.css"

import { useContext } from "react"
import { GlobalContext } from "../../context/index.jsx"
import { LogoEliLab } from "../logo"

export const CrachaVerso = () => {

    const TheContext = useContext(GlobalContext);
    const { user, setUser } = TheContext;

    return (
        <div className="contentCracha">
            <div className="contentInfo verso">
                <p className="crachaId">{user.id}</p>
                <LogoEliLab />
                <div className="ContentInfoUser nomeCompleto">
                    <p className="titleInfoUser">Nome Completo</p>
                    <p className="UserDate">{user.nome}</p>
                </div>

                <div className="ContentInfoUser cargo">
                    <p className="titleInfoUser"> Cargo </p>
                    <p className="UserDate">{user.cargo}</p>
                </div>

                <div className="contentTelefoneId">
                    <div className="ContentInfoUser telefone">
                        <p className="titleInfoUser">Contato de Emergencia</p>
                        <p className="UserDate"> (85) {user.telefone}</p>
                    </div>

                    <div className="ContentInfoUser id">
                        <p className="titleInfoUser">Id</p>
                        <p className="UserDate">{user.id}</p>
                    </div>
                </div>

                <div className="ContentInfoUser email">
                        <p className="titleInfoUser">Email</p>
                        <p className="UserDate">{user.email}</p>
                </div>

                <div className="AvisosCracha">
                        <p className="titleInfoUser avisoTitle">IDENTIDADE FUNCIONAL</p>
                        <ul>
                            <li>Este cartão é de uso estritamente pessoal.</li>
                            <li>É obrigatorio seu uso para circular nas dependências da empresa.</li>
                        </ul>
                </div>
            </div>

            <link rel="stylesheet" href="" />
        </div>
    )
}