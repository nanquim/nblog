var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexão com BD criada');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123',
        database: 'nblog'
    });
}

module.exports = function() {
   console.log('O autoload carregou o módulo de conexão com o BD');
   return connMysql;
};