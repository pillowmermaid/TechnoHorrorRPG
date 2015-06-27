define(
    [
        'backbone',
        'handlebars',
        'enemyParty/EnemyPartyView',
        'text!areas/arena/ArenaTemplate.html'
    ],
    function(Backbone, Handlebars, EnemyPartyView, ArenaTemplate) {
        'use strict';
        var ArenaView = Backbone.View.extend({
            el: '#arena-container',

            events:{
                'click #spawn-enemy-party': 'spawnEnemyParty',
                'click button': 'freeze',
            },

            template: Handlebars.compile(ArenaTemplate),

            render: function(){
                this.$el.html(this.template);
                return this;
            },

            freeze: function(){
                $('button').prop('disabled', true);
                setTimeout(function(){
                    $('button').prop('disabled', false);
                }, 1200);
            },

            spawnEnemyParty: function(){
                this.enemyPartyView = new EnemyPartyView();
                this.enemyPartyView.render();
            }

        });
        return new ArenaView;
    }
);