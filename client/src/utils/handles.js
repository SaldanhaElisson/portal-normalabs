import Axios from "axios"

export const handleRegister = (values) =>{
    Axios.post("http://localhost:3007/register",{
        nome: values.nome,
        email: values.email,
        senha: values.senha,
        cpf: values.cpf,
        data: values.data,
        urlImg: values.urlImg, 
    }).then((response) =>{
        console.log(response.data);
        window.location.href = `${response.data}`;
    })
}

