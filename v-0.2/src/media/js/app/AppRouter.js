define([
    'backbone',
    'areas/main/MainAreaView',
    'areas/arena/Arena',
    'parties/playerParty/PlayerView',
    'monsterHouse/beastiary/MonsterBank',
    'monsterHouse/monsterBank/MonsterBankView'
],

function(Backbone, MainAreaView, Arena, PlayerView, MonsterBank, MonsterBankView) {
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '' : 'goHome',
            'arena' : 'goToArena',
            'monsterViewer': 'goToMV'
        },

        initialize: function(){
            this.mainAreaView = new MainAreaView();
            this.arena = new Arena();
            this.monsterBankView = new MonsterBankView();
        },

        goHome: function() {
            this.mainAreaView.render();
        },

        goToArena: function() {
            this.arena.render();
            PlayerView.render();
        },

        goToMV: function(){
            this.monsterBankView.render();
        }
    });

    return Router;
});