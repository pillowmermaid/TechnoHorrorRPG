define(
    [
        'backbone',
        'handlebars',
        'parties/enemyParty/EnemyPartyView',
        'text!areas/arena/ArenaTemplate.html'
    ],
    function(Backbone, Handlebars, EnemyPartyView, ArenaTemplate) {
        'use strict';
        var ArenaView = Backbone.View.extend({
            el: '#app-container',

            events:{
                'click #spawn-enemy-party': 'spawnEnemyParty',
            },

            template: Handlebars.compile(ArenaTemplate),

            render: function(){
                this.$el.html(this.template);
                return this;
            },

            spawnEnemyParty: function(){
                var enemyPartyView = new EnemyPartyView();
                enemyPartyView.render();
            }

        });
        return ArenaView;
    }
);