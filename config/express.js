/**
 * Created by diogo.queiroz on 16/10/2015.
 */
var express = require('express');
//var home = require('../app/routes/home');
var load = require('express-load');

module.exports = function () {
    var app = express();

    // Vari�veis de Ambiente
    app.set('port', 3000);

    // Middleware
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}