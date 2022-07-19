// não vai está no projeto, apenas vai inicar o banco 
const Database = require('./config');

const initDb = {
    async init() {
        
        try{
        const db = await Database();

        await db.exec(`CREATE TABLE users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            senha TEXT,
            cpf INT,
            data TEXT,
            urlImg  TEXT
            )`);

        await db.close() // abriu tem que fechar

        } catch(e){console.log(e)}
      
    }
}

initDb.init();