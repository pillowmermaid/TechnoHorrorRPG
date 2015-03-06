define(
    [
        'backbone',
        'app/AppRouter',
        'parties/playerParty/PlayerView'
    ],
    function(Backbone, AppRouter, PlayerView) {
        'use strict';

        return {
            start: function start() {
                PlayerView.render();
                var router = new AppRouter();
                Backbone.history.start();
            }
        };
    }
);