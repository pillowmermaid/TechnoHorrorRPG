var require = {
    deps: ['main'],
    paths:{
        jquery:                      'lib/jquery.min',

        jqueryUI:                    'lib/jquery-ui.min',

        // Underscore
        underscore:                  'lib/underscore',

        // Backbone
        backbone:                    'lib/backbone',

        handlebars:                  'lib/handlebars-v2.0.0'

    },

    shim: {
        jqueryUI:{
            deps: ['jquery'],
            exports: 'jqueryUI'
        },

        underscore: {
            exports: '_'
        },

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        handlebars: {
            exports: 'Handlebars'
        }
    }
};