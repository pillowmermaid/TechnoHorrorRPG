var require = {
    deps: ['main'],
    paths:{
        jquery:                      'lib/jquery-1.11.0.min',

        jqueryUI:                    'lib/jquery-ui-1.10.4.custom.min',

        // Underscore
        underscore:                  'lib/underscore',

        // Backbone
        backbone:                    'lib/backbone',

        handlebars:                  'lib/handlebars-v1.3.0'

    },

    shim: {
        jqueryUI:{
            deps: ['jquery'],
            exports: 'jqueryUI'
        },

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        underscore: {
            exports: '_'
        },

        handlebars: {
            exports: 'Handlebars'
        }
    }
};