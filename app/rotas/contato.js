module.exports = function(application) {
    application.get('/contato', function(req, res) {
        console.log('Rota pegaPaginaContato');
        application.app.controles.contato.pegaPaginaContato(application, req, res);
    });
}