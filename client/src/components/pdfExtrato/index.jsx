import "./style.css"
import "./style-responsive.css"

import {extrato, downloadExtrato, gerarPDF} from "../../reports/ExtratosFuncionarios"
import { useEffect, useContext } from "react"
import { GlobalContext } from "../../context/index.jsx"


export const ExtratoDocument = () =>{

    const TheContext = useContext(GlobalContext);
    const { user, setUser } = TheContext;

    const extratoUser = extrato(user)

    useEffect(() => {
       gerarPDF(extratoUser)
    }, [extratoUser])


    return(
        <div className="pdf ">
            <div id="iframeContainer">
                <iframe src="" id="iframePDF"></iframe>
            </div>
            <button className="button-form extrato" onClick={() => {downloadExtrato(extratoUser)}}>Baixar PDF</button>
        </div>
    )
}