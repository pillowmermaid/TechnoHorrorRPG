define(
    [
        'backbone',
        'app/AppRouter',
        'parties/playerParty/PlayerView'
    ],
    function(Backbone, AppRouter, PlayerView) {
        'use strict';

        var App = {
            start: function() {
                PlayerView.render();
                var router = new AppRouter();
                Backbone.history.start();
                router.navigate('arena');
            },
            restart: function(){

            }
        }
        return App;
    }
);