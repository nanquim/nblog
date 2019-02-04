module.exports = function(application) {
    /** POST and GET endpoints */
    application.get('/login', function(req, res) {
        console.log('Rota pegaPaginaLogin');
        application.app.controles.login.pegaPaginaLogin(application, req, res);
    });

    application.post('/logar', function(req, res) {
        console.log('Rota /logar');
        application.app.controles.login.logaUsuario(application, req, res);
    });
    
    application.post('/registrar', function(req, res) {
        console.log('Rota /registrar');
        console.log('req.body >>>' + req.body.formRegistroSenha);
       
        application.app.controles.login.registraUsuario(application, req, res);
    });
}