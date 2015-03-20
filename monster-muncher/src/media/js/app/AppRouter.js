define([
    'backbone',
    'areas/arena/Arena',
    'monsterHouse/beastiary/MonsterBank',
    'monsterHouse/monsterBank/MonsterBankView'
],

function(Backbone, Arena, MonsterBank, MonsterBankView) {
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            'arena' : 'goToArena',
            'monsterViewer': 'goToMV'
        },

        initialize: function(){
            this.arena = new Arena();
            this.monsterBankView = new MonsterBankView();
        },

        goToArena: function() {
            this.arena.render();
        },

        goToMV: function(){
            this.monsterBankView.render();
        }
    });

    return Router;
});