module.exports = function (application) {
    //AS ROTAS MIDDLEWARES GLOBAIS SÃO CHAMADAS PARA TODA REQUISIÇÃO (app.use)
    //TODO vc não está fazendo isso, está passando como parâmetro...
    function checkarSessao(application, req, res, next) {
        if(req.session && req.session.user && req.session.user.autorizado && req.user) {
            console.log('req.session >>> ' + req.session);
            console.log('req.session.user >>> ' + req.session.user);
            console.log('req.session.user.autorizado >>> ' + req.session.user.autorizado);
            console.log('req.user >>> ' + req.user);
            next();
        }
        console.log('problema ao checkar sessao');
        res.redirect('login');
    }

    application.get('/contatos-enviados', checkarSessao, function (req, res) {
        console.log('Rota /contatos-enviados');
        application.app.controles.contato.pegaContatos(application, req, res);
    });

    application.get('/incluir-artigo', checkarSessao, function (req, res) {
        console.log('Rota /incluir-artigo GET');
        application.app.controles.artigo.paginaIncluirArtigo(application, req, res);
    });

    application.post('/incluir-artigo', checkarSessao, function (req, res) {
        console.log('Rota /incluir-artigo POST');
        application.app.controles.artigo.incluirArtigo(application, req, res);
    });

    application.get('/logout', checkarSessao, function (req, res) {

    });
}