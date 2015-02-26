define([
    'backbone',
    'areas/main/MainAreaView',
    'areas/arena/ArenaView',
    'monsterHouse/beastiary/MonsterBank',
    'monsterHouse/monsterBank/MonsterBankView'
],

function(Backbone, MainAreaView, ArenaView, MonsterBank, MonsterBankView) {
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '' : 'goHome',
            'arena' : 'goToArena',
            'monsterViewer': 'goToMV'
        },

        initialize: function(){
            this.monsterBank = MonsterBank.initMonsterBank();
            this.mainAreaView = new MainAreaView();
            this.arenaView = new ArenaView();
            this.monsterBankView = new MonsterBankView({collection: this.monsterBank});
        },

        goHome: function() {
            this.mainAreaView.render();
        },

        goToArena: function() {
            this.arenaView.render();
        },

        goToMV: function(){
            this.monsterBankView.render();
        }
    });

    return Router;
});