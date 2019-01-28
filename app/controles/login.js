module.exports.pegaPaginaLogin = function (application, req, res) {
    console.log('Controller pegaPaginaLogin');
    res.render('login', {validacao: {}, usuario: {} });
}

module.exports.registraUsuario = function (application, req, res) {
    console.log('Controller registraUsuario');
    
    //urlencoded (body parsed)
    console.log('req.body >>> ' + req.body);
    
    //express
        //da url
    console.log('req.query.name >>> ' + req.query.name);
        //parâmetro das rotas
    console.log('req.query.name >>> ' + req.param);
    
    var usuario = req.body;

    /** Validação do formulário */
    //TODO validar formatos
    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('email', 'Email é obrigatório').notEmpty();
    req.assert('senha', 'Senha é obrigatório').notEmpty();

    var errosValidacao = req.validationErrors();

    console.log(errosValidacao);

    if (errosValidacao) {
        res.render('login', {
            validacao: errosValidacao,
            usuario: usuario
        });
        return;
    }

    /** Conexão com banco */
    /* var conexao = application.config.conectarBD();
    var novoUsuario = new application.app.modelos.UsuariosModel(conexao);

    novoUsuario.getUsuario(usuario, function (error, result) {
        console.log(result);
        
        novoUsuario.novoUsuario(usuario);
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