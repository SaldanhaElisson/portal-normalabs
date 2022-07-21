const Database = require('../db/config');

// nome: emailExist[0].nome,
// email: emailExist[0].email,
// telefone :emailExist[0].telefone,
// cargo: emailExist[0].cargo,
// urlImg: emailExist[0].urlImg,

module.exports ={

    async login(req, res) {
        const db = await Database()
        const email = req["tokenData"].email

       

        const emailExist = await db.all(`SELECT * FROM users WHERE email = "${email}"`)

        res.send({
            nome: emailExist[0].nome,
            email: emailExist[0].email,
            telefone :emailExist[0].telefone,
            cargo: emailExist[0].cargo,
            urlImg: emailExist[0].urlImg,
        });        
    },
    
    async register(req, res){
        const db = await Database()
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        const telefone = req.body.telefone
        const cargo = req.body.cargo
        const urlImg = req.body.urlImg

        // verificar se já existe o email
        const emailExist = await db.all(`SELECT * FROM users WHERE email = "${email}"`);
        if(emailExist.length > 0 ){
            res.send("EMAILEXISTE")
            return
        }
        

        const telefoneExist = await db.all(`SELECT * FROM users WHERE telefone = ${telefone}`);    
        if(telefoneExist.length > 0){
            console.log("telefone existe")
            res.send("TELEFONEEXISTE");
            return 
        }

        const senhagExist = await db.all(`SELECT * FROM users WHERE senha = "${senha}"`);
        console.log(senhagExist.lengt > 0);        
        if(senhagExist.length > 0){
            res.send("SENHAEXISTE")
            return 
        }

        await db.run(`INSERT INTO users(
            nome,
            email,
            senha,
            telefone,
            cargo,
            urlImg 
        )VALUES(
            "${nome}",
            "${email}",
            "${senha}",
            ${telefone},
            "${cargo}",
            "${urlImg}"
        )`)
            
        res.send(true);
    }
}
