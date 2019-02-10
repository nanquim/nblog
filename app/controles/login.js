module.exports.pegaPaginaLogin = function (application, req, res) {
    console.log('Controller pegaPaginaLogin');
    res.render('login', {validacao: {}, usuario: {} });
}

module.exports.registraUsuario = function (application, req, res) {
    console.log('Controller registraUsuario');

    let usuario = {
        nome: req.body.formRegistroNome,
        email: req.body.formRegistroEmail,
        senha: req.body.formRegistroSenha
    };

    /** Validação do formulário */
    //TODO validar formatos
    /* req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('email', 'Email é obr    igatório').notEmpty();
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
    var conexao = application.config.conectarBD();
    var usuarioModel = new application.app.modelos.UsuariosModel(conexao);

    usuarioModel.buscaUsuarioPorEmail(usuario.email, function (error, result) {
        if ( !result.length ) { 
            //TODO affectedRows???
           usuarioModel.novoUsuario(usuario);
           res.send('novo usuario criado com sucesso: \n' + usuario);
        } else { 
            res.send('usuario já registrado com a ID ' + result[0].id_usuario);
        }
    });
}

module.exports.logaUsuario = function (application, req, res) {
    console.log('Controller logaUsuario');
    let usuario = {
        email: req.body.formLoginEmail,
        senha: req.body.formLoginSenha
    };

    /** Validação do formulário */
    
    /** conexão com banco */
    var conexao = application.config.conectarBD();
    var UsuariosModel = new application.app.modelos.UsuariosModel(conexao);

    UsuariosModel.buscaUsuarioPorEmail(usuario, function (error, result) {
        if ( !result.length ) { 
           res.send('Usuário não encontrado. Por favor, registre-se')
        } else { 
            console.log('Usuário encontrado, vou tentar autenticar...')
            UsuariosModel.autenticaUsuario(usuario, function(error, result) {
                if( !result.length ) {
                    res.send('erro na autenticacao, verifique senha')
                } else {
                    //res.send('usuario logado');
                    res.render('adm', { usuario: result });
                }
            })
        }
    });
}