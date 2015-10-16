/**
 * Created by diogo.queiroz on 16/10/2015.
 */


module.exports = function () {
    var controller = {};
        controller.index = function (req, res) {
            res.render('index', {nome: 'Express'});
        };
    return controller;
};