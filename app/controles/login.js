module.exports.pegaPaginaLogin = function (application, req, res) {
    console.log('Controller pegaPaginaLogin');
    res.render('login', {validacao: {}, usuario: {} });
}

module.exports.registraUsuario = function (application, req, res) {
    console.log('Controller registraUsuario');
  
    res.send('REGISTRADO');

    //var usuario = req.body;

    /** Validação do formulário */
    //TODO validar formatos
    /* req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('email', 'Email é obrigatório').notEmpty();
    req.assert('senha', 'Senha é obrigatório').notEmpty();

    var errosValidacao = req.validationErrors();

    console.log(errosValidacao);

    if (errosValidacao) {
        res.render('login', {
            validacao: errosValidacao,
            usuario: {}
        });
        return;
    } */
    
   
    
    /** Conexão com banco */
    /* var conexao = application.config.conectarBD();
    var u = new application.app.modelos.UsuariosModel(conexao);

    u.getUsuario(usuario, function (error, result) {
        console.log(result);
        
        u.novoUsuario(usuario);
    }); */

}

module.exports.logaUsuario = function (application, req, res) {
    console.log('Controller logaUsuario');
    console.log(req.query)
    var usuario = req.body;

    /** Validação do formulário */
    //TODO validar formatos
    req.assert('form-l-email', 'Email é obrigatório').notEmpty();
    req.assert('form-l-senha', 'Senha é obrigatório').notEmpty();

    var errosValidacao = req.validationErrors();

    console.log(errosValidacao);

    if (errosValidacao) {
        res.render('login', {
            validacao: errosValidacao,
            usuario: usuario
        });
        return;
    }

    res.send('LOGADO');

    /** conexão com banco */
    var conexao = application.config.conectarBD();
    var UsuariosModel = new app.app.modelos.UsuariosModel(conexao);

    /** TODO
     * Verifica se usuário existe
     * Confirma se email e senha estão corretos
     * Direciona para a página de ADMIN/LOGADO
     */
    UsuariosModel.getUsuario(usuario, function (error, result) {
        console.log(result);
        /* if(!result) { 
            
        } */
    });

    //chama model / dao

}