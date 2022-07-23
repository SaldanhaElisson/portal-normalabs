import "./style.css"
import "./style-responsive.css"

import {extrato, downloadExtrato, gerarPDF} from "../../reports/ExtratosFuncionarios"
import { useEffect, useContext } from "react"
import { GlobalContext } from "../../context/index.jsx"
import pdfMake from "pdfmake/build/pdfmake.js"


export const ExtratoDocument = () =>{

    const TheContext = useContext(GlobalContext);
    const { user, setUser } = TheContext;

    useEffect(() => {
       gerarPDF(extrato())
    }, [])


    return(
        <div className="pdf ">
            <div id="iframeContainer">
                <iframe src="" frameborder="0" id="iframePDF"></iframe>
            </div>
            <button className="button-form extrato" onClick={() => {downloadExtrato(extrato())}}>Baixar PDF</button>
        </div>
    )
}