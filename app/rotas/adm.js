module.exports = function(application) {
    application.get('/contatos-enviados', function(req, res) {
        console.log('Rota /contatos-enviados');
        application.app.controles.contato.pegaContatos(application, req, res);
    });

    application.get('/incluir-artigo', function(req, res) {
        console.log('Rota /incluir-artigo GET');
        application.app.controles.artigo.paginaIncluirArtigo(application, req, res);
    });

    application.post('/incluir-artigo', function(req, res) {
        console.log('Rota /incluir-artigo POST');
        application.app.controles.artigo.incluirArtigo(application, req, res);
    });
}