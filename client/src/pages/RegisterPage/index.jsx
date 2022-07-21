import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationInput } from "../../utils/validationInput.js"
import { handleRegister } from "../../utils/handles"

import './style.css'
import './style-responsive.css'
import iconHandcrafts from "../../assets/img/undraw_handcrafts_growing.svg"
import { useNavigate } from "react-router-dom"

export const FieldRegister = () => {

    const navigate = useNavigate()

    const register = async (valeus) => {
        const sucessoOrNot = await handleRegister(valeus)

        // 1 - email já existe
        // 2 - telefone já existe
        // 3 - senha já existe
        if (sucessoOrNot == 3) {
            alert("Email já existe")
        } else if (sucessoOrNot == 2) {
            alert("Senha já existe")
        } else if (sucessoOrNot == 1) {
            alert("numero de tele  á existe")
        } else {
            alert("Cadastrado com suceso")
            navigate("../")
        }
    }

    return (

        <div className="homePages">
            <div className="contentField">

                <img src={iconHandcrafts} alt="imagem-icone-grafico" className="hand-craft-img" />

                <div className="box register ">


                    <div className="header-form ">
                        <h1>Cadastra-se na <span>EliLab</span></h1>
                    </div>

                    <Formik
                        initialValues={{}}
                        className="form-register "
                        validationSchema={validationInput}
                        onSubmit={register}
                    >
                        <Form className="form-group isExist" id="form-register-group">

                            <div className="form-input ">
                                <Field name="nome" className="form-field-input " placeholder="Nome Completo" />
                                <ErrorMessage
                                    component="p"
                                    name="nome"
                                    className="form-error"
                                />
                            </div>

                            <div className="form-input">
                                <Field name="telefone" className="form-field-input telefone" placeholder="Telefone" type="number" />
                                <ErrorMessage
                                    component="p"
                                    name="telefone"
                                    className="form-error"
                                />
                            </div>

                            <div className="form-input">
                                <Field name="cargo" className="form-field-input cargo" placeholder="Cargo" />
                                <ErrorMessage
                                    component="p"
                                    name="cargo"
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
                                <Field name="senha" className="form-field-input " placeholder="Senha" />
                                <ErrorMessage
                                    component="p"
                                    name="email"
                                    className="form-error"
                                />
                            </div>

                            <div className="form-input">
                                <Field name="urlImg" className="form-field-input " placeholder="Carregar Foto de Perfil..." />
                                <ErrorMessage
                                    component="p"
                                    name="urlImg"
                                    className="form-error"
                                />
                            </div>
                            <button className="button-form bnt-register" type="submit"> Cadastrar </button>
                        </Form>
                    </Formik>

                </div>
            </div>
        </div>
    )
}