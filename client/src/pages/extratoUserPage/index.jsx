import "./style.css"


import {ExtratoDocument} from '../../components/pdfExtrato'

export const ExtratoPage = () => {
    return (
        <div className="contentExtrato">
            <ExtratoDocument />
        </div>
    )
}