import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationInput } from "../../utils/validationInput.js"
// import {handleLogin} from "../../utils/handles"

import './style.css'
import './style-responsive.css'
import userImg from "../../assets/img/undraw_handcrafts_user.svg"
import iconHandcrafts from "../../assets/img/undraw_handcrafts_growing.svg"

export const FieldLogin = () => {
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
                        validationSchema={validationInput}
                    >
                        <>
                            <div className="form-group" id="login-form-group">
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

                            </div>
                            <div className="content-register">
                                <p>Esqueceu a senha ?</p>
                                {/* <a href="/register">Não é cadastrado?Faça agora</a> */}
                                <p>Não é cadastrado?Faça agora</p>
                            </div>
                        </>
                    </Formik>
                </div>
            </div>

        </div>

    )

} 