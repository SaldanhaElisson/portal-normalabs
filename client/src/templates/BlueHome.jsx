import { useState } from 'react'
import {FieldLogin} from "../pages/LoginPage/index.jsx"
import {FieldRegister} from "../pages/RegisterPage/index.jsx"


import * as yup from "yup"



function Pages() {
  const [count, setCount] = useState(0)

  const validationInput = yup.object().shape({
    email: yup.string().email("Não é um email*").required("Este campo é obrigatório*"),
    senha: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório*"),
    cpf: yup.number().required("Esse campo é obrigatorio*").min(11, "Não é um cpf"),
    data: yup.date().required("Este campo é obrigatorio*"),
    nome:yup.string().required("Este campo é obrigatório *"),

});

  return (
    <div className="homePages">
      {/* <FieldLogin validationInput={validationInput}/> */}
      <FieldRegister validationInput={validationInput}/>
    </div>
  )
}

export default Pages
