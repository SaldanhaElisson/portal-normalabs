import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationInputLogin } from "../../utils/validationInput.js"
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react"
import { handleHomePage, logout } from "../../utils/handles"
import { GlobalContext } from "../../context/index.jsx"

import './style.css'
import './style-responsive.css'
import userImg from "../../assets/img/undraw_handcrafts_user.svg"
import iconHandcrafts from "../../assets/img/undraw_handcrafts_growing.svg"

export const FieldLogin = () => {

    const TheContext = useContext(GlobalContext);
    const { user, setUser } = TheContext;

    const clearUser = () => {
        setUser(null);
    }

    let navigate = useNavigate();

    useEffect(() => {
        clearUser();
        logout()
    }, [])

    const handleUser = async (values) => {
        const userLogin = await handleHomePage(values);
        let DateLocalStorage = {};
        if (userLogin) {
            DateLocalStorage = localStorage.getItem("dateUser")
        }
        setUser(DateLocalStorage)
        navigate('/home');
    }

    return (
        <div className="homePages">
            <div className="contentField">
                <img src={iconHandcrafts} alt="imagem-icone-grafico" className="hand-craft-img" />

                <div className="box login">
                    <div className="header-form">
                        <img src={userImg} alt="imagem-icone-usario" className="img-icone-user" />
                        <h1>Seja Bem Vindo a <span> EliLab </span></h1>
                    </div>

                    <Formik
                        initialValues={{}}
                        className="form-login"
                        validationSchema={validationInputLogin}
                        onSubmit={handleUser}>
                        <Form className="form-group" id="form-register-group">

                            <div className="form-input" id="input-1">
                                <Field name="email" className="form-field-input " placeholder="Email" type="email" />
                                <ErrorMessage
                                    component="p"
                                    name="email"
                                    className="form-error"
                                />
                            </div>
                            <div className="form-input">
                                <Field name="senha" className="form-field-input" placeholder="Senha" type="password" />
                                <ErrorMessage
                                    component="p"
                                    name="senha"
                                    className="form-error"
                                />
                            </div>

                            <button className="button-form" type="submit"> Login </button>

                            <div className="content-register">
                                <p>Esqueceu a senha ?</p>
                                {/* <a href="/register">Não é cadastrado?Faça agora</a> */}
                                <p>Não é cadastrado?Faça agora</p>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>

        </div>

    )

} 