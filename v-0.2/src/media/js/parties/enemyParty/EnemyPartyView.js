define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'monsterHouse/beastiary/MonsterBank',
        'parties/enemyParty/EnemyView',
        'text!parties/enemyParty/EnemyPartyTemplate.html'
    ],
    function(Backbone, _, Handlebars, MonsterBank, EnemyView, EnemyPartyTemplate) {
        'use strict';
        var EnemyPartyView = Backbone.View.extend({
            el: '#enemy-party',

            template: Handlebars.compile(EnemyPartyTemplate),

            initialize: function(){
                this.render();
                this.enemyParty = this.spawnParty(MonsterBank);
            },

            render: function(){
                this.$el.html(this.template);
                return this;
            },

            spawnParty: function(MonsterBank){
                $('#enemy-party').html('');
                var partySize = Math.floor((Math.random() * 4)+1);
                console.log('Party Size '+partySize);
                var monsterIDs = MonsterBank.pluck('_id');
                for(var i = 0; i<partySize; i++){
                    var enemy = new EnemyView({model:MonsterBank.models[Math.floor(Math.random() * MonsterBank.length)]});
                    $('#enemy-party').append(enemy.render().$el);
                }
            } 
            
        });
        return EnemyPartyView;
    } 
);

