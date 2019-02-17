/**TODO retirar; a rota pode fazer isso direto */
module.exports.pegaPaginaLogin = function (application, req, res) {
    console.log('Controller pegaPaginaLogin');
    res.render('login', {
        validacao: {},
        usuario: {}
    });
}

// nao to vendo a necessiade disso, se o login e o registro já fazem essa busca
/* module.exports.buscaUsuarioPorId = function (application, req, res) {
    
    var conexao = application.config.conectarBD();
    var usuarioModel = new application.app.modelos.UsuariosModel(conexao);

    var usuario;
    usuarioModel.buscaUsuarioPorId(req.user.id_usuario, function(req, res) {
        if(!result.length) {
            console.log('Erro ao buscar usuário, controller login, linha 18');
        } else {
            return result;
        }
    });
    //TODO MTO tosco
    if(usuario != null && usuario != undefined) {
        return usuario;
    }
} */

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
    //console.log('u1.. .' + usuario);
    usuarioModel.buscaUsuarioPorEmail(usuario, function (error, result) {
        if (!result.length) {
            usuarioModel.novoUsuario(usuario, function (error, result) {
                if (!result.length) {
                    usuarioModel.buscaUsuarioPorId(result.insertId, function (error, result) {
                        //console.log('RESULT >>> ' + result[0].id_usuario)
                        req.user = result;
                        delete req.user.password;
                        req.session.user = result;
                        req.session.user.autorizado = true;
                        res.locals.user = result;
                        res.render('adm', {
                            usuario: result
                        });
                    });
                }
            });
        } else {
            res.send('usuario já registrado com a ID ' + result[0].id_usuario);
            //TODO direcionar para login
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

    /** loga o usuário, caso exista */
    UsuariosModel.buscaUsuarioPorEmail(usuario, function (error, result) {
        if (!result.length) {
            res.send('Usuário não encontrado. Por favor, registre-se')
            /**TODO direcionar para registro */
        } else {
            UsuariosModel.autenticaUsuario(usuario, function (error, result) {
                if (!result.length) {
                    res.send('Erro na autenticação');
                } else {
                    req.user = result;
                    delete req.user.password;
                    req.session.user = result;
                    req.session.user.autorizado = true;
                    res.locals.user = result;
                    res.render('adm', {
                        usuario: result
                    });
                }
            });
        }
    });
}