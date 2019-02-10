function ArtigosModel(conexao) {
    this._conexao = conexao;
}

ArtigosModel.prototype.incluiArtigo = function (artigo, callback) {
    /**TODO INCLUIR DATA NO OBJETO */
    this._conexao.query('INSERT INTO artigos SET ?', artigo, callback);
}

module.exports = function () {
    return ArtigosModel;
};