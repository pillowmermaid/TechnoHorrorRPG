define(
    [
        'backbone',
        'handlebars',
        'monsterHouse/beastiary/MonsterBank',
        'parties/playerParty/PlayerView',
        'parties/enemyParty/Enemy',
        'parties/enemyParty/EnemyParty',
        'parties/enemyParty/EnemyPartyView',
        'text!areas/arena/ArenaTemplate.html'
    ],
    function(Backbone, Handlebars, MonsterBank, PlayerView, Enemy, EnemyParty, EnemyPartyView, ArenaTemplate) {
        'use strict';
        var ArenaView = Backbone.View.extend({
            el: '#app-container',

            events:{
                'click #spawn-enemy-party': 'spawnEnemyParty',
            },

            template: Handlebars.compile(ArenaTemplate),

            render: function(){ 
                this.$el.html(this.template);
                if(this.enemyPartyView){
                    this.enemyPartyView.renderParty();
                }
                var target = $('#player');
                PlayerView.renderToTarget(target);
                return this;
            },

            spawnEnemyParty: function(){
                var enemyParty = new EnemyParty();
                for(var i = 0; i<Math.floor((Math.random() * 4)+1); i++){
                    var monster = MonsterBank.models[Math.floor(Math.random() * MonsterBank.length)];
                    var enemy = new Enemy({
                        _id: monster.get('_id'),
                        image: monster.get('image'),
                        name: monster.get('name'),
                        class: monster.get('class'),
                        description: monster.get('description'),
                        stats: monster.get('stats'),
                    });
                    enemyParty.add(enemy);
                }
                this.enemyPartyView = new EnemyPartyView({collection:enemyParty});
            },
        });
        return ArenaView;
    }
);