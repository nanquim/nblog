module.exports.pegaPaginaContato = function(application, req, res){
    console.log('Controller pegaPaginaContato');
    res.render('contato');
}

module.exports.enviaContato = function(application, req, res) {
    console.log('Controller enviaContato');

    var contato = req.body;

     /** Validação do formulário */

    /** Conexão com banco */
    var conexao = application.config.conectarBD();
    var contatoModel = new application.app.modelos.ContatoModel(conexao);

    contatoModel.gravarContato(contato, function(err, result) {
        if (err) throw err;
        if ( result.affectedRows = 0) {
            res.send('Erro ao inserir contato');
        } else {
            res.send('Contato inserido com sucesso');
        }
    })





}