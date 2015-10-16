/**
 * Created by diogo.queiroz on 16/10/2015.
 */
var express = require('express');

module.exports = function () {
    var app = express();

    // Variáveis de Ambiente
    app.set('port', 3000);

    // Middleware
    app.use(express.static('./public'));

    return app;
}