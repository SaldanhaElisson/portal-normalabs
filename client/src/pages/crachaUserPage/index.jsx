import "./style.css"
import "./style-responsive.css"
import { useState } from "react";
import {CrachaFrente} from "../../components/crachaFrente"
import { CrachaVerso } from "../../components/crachaVerso";


export const CracharUser = () => {  
    
    const [frenteVerso, setFrenteVerso] = useState(null)

    const Girar = () =>{
        if(!frenteVerso){
            setFrenteVerso(1)
        } else if(frenteVerso){
            setFrenteVerso(null)
        }
    }


    return(
        <div className="pageCrachar">

            { frenteVerso && <CrachaVerso />}
            { !frenteVerso && <CrachaFrente />}

        <button onClick={Girar} className="bntCrachaPages "> Girar </button>
        </div>
    )
}