const Database = require('../db/config');

module.exports ={
    async login(req, res) {
        const db = await Database()
        const email = req.body.email
        const senha = req.body.senha
        
        const emailExist = await db.all(`SELECT * FROM users WHERE email = "${email}"`)

        if(emailExist[0]){
            if(emailExist[0].senha == senha){
                console.log("logado com sucesso")
                res.send(emailExist[0])
            }        
            console.log("não logado")

        } else {
            console.log("não logado")
            res.send(null);
        }

        
    },
    
    async register(req, res){
        const db = await Database()
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        const cpf = req.body.cpf
        const data = req.body.data
        const urlImg = req.body.urlImg

        // verificar se já existe o email
        const emailExist = await db.all(`SELECT * FROM users WHERE email = "${email}"`);
        // const cpfExist = await db.all(`SELECT * FROM users WHERE email = ${cpf}`);
        // const urlImgExist = await db.all(`SELECT * FROM users WHERE email = "${urlImg}"`);
        
        if(emailExist){
            console.log(emailExist)
        }

        // if(cpfExist){
        //     res.send("CPF já existe");
        // }

        // if(urlImgExist){
            
        // }

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
