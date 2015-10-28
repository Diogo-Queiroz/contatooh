/**
 * Created by diogo.queiroz on 28/10/2015.
 */
angular.module('contatooh', ['ngRoute'])
    .config(function ($routerProvider) {

        $routerProvider.when('/contatos', {
            templateUrl: "partials/contatos.html",
            controller: 'ContatosController'
        });
    });