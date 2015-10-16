/**
 * Created by diogo.queiroz on 16/10/2015.
 */

module.exports = function (app) {
    var controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
};