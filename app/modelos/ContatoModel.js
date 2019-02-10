function ContatoModel(conexao) {
    this._conexao = conexao;
}

ContatoModel.prototype.gravarContato = function (contato, callback) {
   console.log('Model enviaContato');
   //TODO não aceita nova propriedade, mas é obj
   //var hoje = new Date();
   //contato.hora_inclusao(hoje);
   console.log(contato)
   this._conexao.query('INSERT INTO contato SET ?', contato, callback);
}

module.exports = function () {
    return ContatoModel;
};