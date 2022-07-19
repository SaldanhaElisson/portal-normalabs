const Database = require('../db/config');

module.exports ={
    
    async create(req, res){
        const db = await Database()
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        const cpf = req.body.cpf
        const data = req.body.data
        const urlImg = req.body.urlImg

        await db.run(`INSERT INTO users(
            nome,
            email,
            senha,
            cpf,
            data,
            urlImg 
        )VALUES(
            "${nome}",
            "${email}",
            "${senha}",
            ${cpf},
            "${data}",
            "${urlImg}"
        )`)

     
        res.send("http://localhost:5173");
    }
}
