const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
console.log(open)

// imagina o banco de dados como uma caixinha, toda vez que eu abrir eu quero pegar algo preciso abrir a tampa

module.exports = () => 
    open({
        filename: './db/colaboradores.sqlite', //vai receber o caminho do banco de dados
        driver:sqlite3.Database, // driver é quem comando o banco de dados
    });
 // configuração do banco de dados