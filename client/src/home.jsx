import { useState } from 'react'
import {FieldLogin} from "./components/Login/index.jsx"
import * as yup from "yup"



function Login() {
  const [count, setCount] = useState(0)

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    senha: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório"),
});

  return (
    <div className="homePages">
      <FieldLogin validationLogin={validationLogin}/>
    </div>
  )
}

export default Login
