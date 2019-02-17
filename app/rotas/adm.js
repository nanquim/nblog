module.exports = function (application) {
    //AS ROTAS MIDDLEWARES GLOBAIS SÃO CHAMADAS PARA TODA REQUISIÇÃO (app.use)
    //TODO essas 2 rotas parecem reduntantes
    /** checkarSessao 
     *   busca o usuário no banco pelo email do req.user (redundante?)
     *   envia usuário pro ejs (res.locals.usuario = usuario)
     */
    function checkarSessao(application, req, res, next) {
        if(req.session && req.session.user && req.session.user.autorizado) {
            next();
        }
        console.log('problema ao checkar sessao');
        res.redirect('login');
    }
    /** checkarLogin */
    function checkarLogin(req, res, next) {
        if (!req.user) {
            console.log('problema ao checkar login')
            res.redirect('login');
        } else {
            next();
        }
    }

    application.get('/contatos-enviados', checkarSessao, checkarLogin, function (req, res) {
        console.log('Rota /contatos-enviados');
        application.app.controles.contato.pegaContatos(application, req, res);
    });

    application.get('/incluir-artigo', checkarSessao, checkarLogin, function (req, res) {
        console.log('Rota /incluir-artigo GET');
        application.app.controles.artigo.paginaIncluirArtigo(application, req, res);
    });

    application.post('/incluir-artigo', checkarSessao, checkarLogin, function (req, res) {
        console.log('Rota /incluir-artigo POST');
        application.app.controles.artigo.incluirArtigo(application, req, res);
    });

    application.get('/logout', checkarSessao, checkarLogin, function (req, res) {

    });
}