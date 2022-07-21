import Axios from "axios"
import { Navigate } from "react-router-dom"

export const apiColaboradores = Axios.create({
    baseURL: "http://localhost:3007",
})


export const handleRegister = async (values) => {

    try {
        const sucessOrNot = await apiColaboradores.post("/register", {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
            telefone: values.telefone,
            cargo: values.cargo,
            urlImg: values.urlImg,
        })

        console.log(sucessOrNot.data)

        if (sucessOrNot.data == "TELEFONEEXISTE") {
            return 1
        }

        if (sucessOrNot.data == "SENHAEXISTE") {
            return 2
        }

        if (sucessOrNot.data == "EMAILEXISTE") {
            return 3
        }
    } catch (err) {
        console.log(err)
    }

    return null

}


// crear Session por meil do tolkin Bearer
export const creatSession = async (email, senha, telefone) => {
    try {
        const response = await apiColaboradores.post("/authentic", {
            email: email,
            senha: senha,
            telefone: telefone,
        })

        console.log(response.data.email)

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);

    } catch (err) {
        console.log(err)
    }

}

export const goHomePage = async (tolken) => {

    if (tolken) {

    }
    const email = localStorage.getItem("email")

    console.log("envianddo email", email);
    apiColaboradores.defaults.headers.Authorization = `Bearer ${tolken}`
    return await apiColaboradores.get("/login", {
        email: email,
    });

}

export const handleLoggin = async (values, tolken) => {
    // criar session
    await creatSession(values.email, values.senha, values.telefone)

    // atualizar o token
    tolken = localStorage.getItem("token");

    // ir para home page
    return goHomePage(tolken);
}

export const handleHomePage = async (values) => {

    let isToken = localStorage.getItem("token");
    let userLogged
    if (isToken) {
        try {
            userLogged = await goHomePage(isToken);
        } catch (err) {
            console.log(err)
        }

    } else {

        console.log("123", isToken)
        // // criar sessão e depois ir para home page
        try {
            userLogged = await handleLoggin(values, isToken)
        } catch (err) {
            console.log(err)
        }
    }

    localStorage.setItem("dateUser", JSON.stringify(userLogged.data));

    return true;
}

export const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("dateUser");
    apiColaboradores.defaults.headers.Authorization = null

}
