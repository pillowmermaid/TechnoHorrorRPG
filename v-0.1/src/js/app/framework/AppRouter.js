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
        }
    });

    return Router;
});