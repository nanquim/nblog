function UsuariosModel(conexao) {
    this._conexao = conexao;
}

/** Se usuário existir, retorna a id_usuario */
UsuariosModel.prototype.buscaUsuarioPorEmail = function (usuarioEmail, callback) {
    console.log('Model buscaUsuarioPorEmail');
    this._conexao.query('SELECT id_usuario FROM usuario WHERE email = ? ', usuarioEmail.email, callback);
}

UsuariosModel.prototype.novoUsuario = function (usuario, callback) {
    var hoje = new Date();
    usuario.data_criacao = hoje;
    this._conexao.query('INSERT INTO usuario SET ?', usuario, callback);
}

UsuariosModel.prototype.autenticaUsuario = function (usuario, callback) {
    console.log('Model autenticaUsuario ')
    this._conexao.query('SELECT * FROM usuario WHERE email = ? and senha = ? ', [usuario.email, usuario.senha], callback);
}

module.exports = function () {
    return UsuariosModel;
};