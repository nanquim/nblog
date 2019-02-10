module.exports = function(application) {
    application.get('/contatos-enviados', function(req, res) {
        console.log('Rota /contatos-enviados');
        application.app.controles.contato.pegaContatos(application, req, res);
    });
}