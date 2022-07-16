import { Formik, Form, Field, ErrorMessage } from "formik"
import './style.css'
import userImg from "../../assets/img/undraw_handcrafts_user.svg"
import iconHandcrafts from "../../assets/img/undraw_handcrafts_growing.svg"

export const FieldLogin = ({ validationLogin }) => {
    return (

        <div className="contentFielLogin">

  
            <img src={iconHandcrafts} alt="imagem-icone-grafico" className="hand-craft-img" />
    
            <div className="boxLogin">

                <div className="header-form">
                    <img src={userImg} alt="imagem-icone-usario" className="img-icone-user" />
                    <h1>Seja Bem Vindo</h1>
                </div>

                <Formik
                    initialValues={{}}
                    className="form-login"
                    validationSchema={validationLogin}
                >
                    <>
                        <div className="login-form-group">
                            <div className="form-input">
                                <Field name="email" className="form-field-input " placeholder="Email" type="email" />
                                <ErrorMessage
                                    component="p"
                                    name="email"
                                    className="form-error"
                                />
                            </div>
                            <div className="form-input">
                                <Field name="senha" className="form-field-input" placeholder="Senha" type="password"/>
                                <ErrorMessage
                                    component="p"
                                    name="senha"
                                    className="form-error"
                                />
                            </div>
                            <div className="buttonDiv">
                                <button className="button-form-login" type="submit"> Login </button>
                            </div>

                        </div>
                        <div className="content-register">
                            <p>Esqueceu a senha ?</p>
                            <p>Não é cadastrado?Faça agora</p>
                        </div>
                    </>
                </Formik>

            </div>
        </div>
    )

} 