define(
    [
        'backbone',
        'app/AppRouter',
    ],
    function(Backbone, AppRouter) {
        'use strict';

        return {
            start: function start() {
                var router = new AppRouter();
                Backbone.history.start();
            }
        };
    }
);