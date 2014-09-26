var require = {
    deps: ['main'],
    paths:{
        jquery:                      'lib/jquery.min',

        jqueryUI:                    'lib/jquery-ui.min',

        // Underscore
        underscore:                  'lib/underscore',

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

        handlebars: {
            exports: 'Handlebars'
        }
    }
};