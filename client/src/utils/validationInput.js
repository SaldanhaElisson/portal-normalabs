import * as yup from "yup"

export const validationInput = yup.object().shape({
    email: yup.string().email("Não é um email*").required("Este campo é obrigatório*"),
    senha: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório*"),
    cpf: yup.number().required("Esse campo é obrigatorio*").min(11, "Não é um cpf"),
    data: yup.date().required("Este campo é obrigatorio*"),
    nome:yup.string().required("Este campo é obrigatório *"),

});

export const validationInputLogin = yup.object().shape({
    email: yup.string().email("Não é um email*").required("Este campo é obrigatório*"),
    senha: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório*"),
});