module.exports = function(application) {
    application.get('/', function(req, res) {
        console.log('Rota /');
        application.app.controles.inicio.pegaPaginaInicial(application, req, res);
    });
}