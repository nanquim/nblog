module.exports.paginaIncluirArtigo = function (application, req, res) {
    console.log('Controller paginaIncluirArtigo');
    res.render('artigo-incluir');
}

module.exports.incluirArtigo = function (application, req, res) {
    console.log('Controller incluirArtigo');

    /**TODO validar formulário */

    var artigo = req.body;

    /** conexão com banco */
    var conexao = application.config.conectarBD();
    var ArtigosModel = new application.app.modelos.ArtigosModel(conexao);

    ArtigosModel.incluiArtigo(artigo, function(err, result) {
        if (err) throw err;
        if ( result.affectedRows = 0) {
            res.send('Erro ao inserir artigo');
        } else {
            res.send('Artigo inserido com sucesso');
        }
    });
}