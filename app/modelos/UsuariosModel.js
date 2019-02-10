function UsuariosModel(conexao) {
    this._conexao = conexao;
}

/** Se usuário existir, retorna a id_usuario */
UsuariosModel.prototype.getUsuario = function (usuario, callback) {
    console.log('Model getUsuario');
    this._conexao.query('SELECT id_usuario FROM usuarios WHERE email = ? ', usuario, callback);
}

UsuariosModel.prototype.novoUsuario = function (usuario, callback) {
    var hoje = Date.now();
    this._conexao.query('INSERT INTO usuarios SET ?', usuario, callback);
}

module.exports = function () {
    return UsuariosModel;
};