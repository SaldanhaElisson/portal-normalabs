import { Formik, Form, Field, ErrorMessage } from "formik"
import './style.css'

import iconHandcrafts from "../../assets/img/undraw_handcrafts_growing.svg"

export const FieldRegister = ({ validationInput }) => {
    return (

        <div className="contentField">

            <img src={iconHandcrafts} alt="imagem-icone-grafico" className="hand-craft-img" />
    
            <div className="box register">

                <div className="header-form">
                    <h1>Cadastra-se</h1>
                </div>

                <Formik
                    initialValues={{}}
                    className="form-register"
                    validationSchema={validationInput}
                >
                    <>
                        <div className="form-group" id="form-register-group">
                            <div className="form-input">
                                <Field name="nome" className="form-field-input " placeholder="Nome Completo" />  
                                <ErrorMessage
                                    component="p"
                                    name="nome"
                                    className="form-error"
                                />      
                            </div>
                            
                            <div className="form-input">
                                <Field name="cpf" className="form-field-input cpf" placeholder="CPF" type="number"/>
                                <ErrorMessage
                                    component="p"
                                    name="cpf"
                                    className="form-error"
                                />
                            </div>

                            <div className="form-input">
                                <Field name="data" className="form-field-input data" placeholder="Data de Nascimento" type="date" />
                                <ErrorMessage
                                    component="p"
                                    name="data"
                                    className="form-error"
                                />
                            </div>

                            <div className="form-input">
                                <Field name="email" className="form-field-input " placeholder="Email" type="email" />
                                <ErrorMessage
                                    component="p"
                                    name="email"
                                    className="form-error"
                                />
                            </div>

                            <div className="form-input">
                                <Field name="senha" className="form-field-input " placeholder="Senha"  />
                                <ErrorMessage
                                    component="p"
                                    name="email"
                                    className="form-error"
                                />
                            </div>

                            <div className="form-input">
                                <Field name="foto" className="form-field-input " placeholder="Carregar Foto de Perfil..." />
                                <ErrorMessage
                                    component="p"
                                    name="email"
                                    className="form-error"
                                />
                            </div>
                                <button className="button-form bnt-register" type="submit"> Cadastrar </button>
                        </div>
                    </>
                </Formik>

            </div>
        </div>

    )
}