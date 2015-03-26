define([
    'backbone',
    'monsterHouse/beastiary/MonsterBank',
    'monsterHouse/monsterBank/MonsterBankView'
],

function(Backbone, MonsterBank, MonsterBankView) {
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            'monsterViewer': 'goToMV'
        },

        initialize: function(){
            this.monsterBankView = new MonsterBankView();
        },

        goToMV: function(){
            this.monsterBankView.render();
        }
    });

    return Router;
});