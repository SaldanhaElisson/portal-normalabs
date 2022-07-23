const { sign } = require("jsonwebtoken")
const Database = require('../db/config');



// criar token
module.exports = {
    // criandoTokeen
    async auth(req, res) {
        const db = await Database()

        email = req.body.email;

        telefone = req.body.telefone
        senha = req.body.senha;

        const emailExist = await db.all(`SELECT * FROM users WHERE email = "${email}"`)

        // verificando se tem email e senha correspondente no db
        if(emailExist[0]){
            if(emailExist[0].senha == senha){
                // verificando o token
                const token = await sign({
                    email, telefone,
                }, "NORMALAB", {
                    expiresIn: 100000,
                })
                
                console.log("logado com sucesso")
                res.json({
                    token,
                    email: emailExist[0].email
                })
          
            }else{
                console.log("senha incorreta");
                res.send("senha")
            }
       
        } else {
            console.log("email incorreto");
            res.send("email")
        }
    },

}