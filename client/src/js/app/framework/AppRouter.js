define([
    'backbone'
],

function(Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '' : 'goToPage',
            ':page' : 'goToPage'
        },

        goToPage: function(page) {
            console.log(page);
        }
    });

    return Router;
});