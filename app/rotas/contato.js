module.exports = function(application) {
    application.get('/contato', function(req, res) {
        console.log('Rota pegaPaginaContato');
        application.app.controles.contato.pegaPaginaContato(application, req, res);
    });

    application.post('/contato', function(req, res) {
        console.log('Rota /contato POST');

        application.app.controles.contato.enviaContato(application, req, res);
    });
}