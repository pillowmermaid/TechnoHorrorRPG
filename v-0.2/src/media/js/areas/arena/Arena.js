define(
    [
        'backbone',
        'handlebars',
        'monsterHouse/beastiary/MonsterBank',
        'parties/enemyParty/Enemy',
        'parties/enemyParty/EnemyParty',
        'parties/enemyParty/EnemyPartyView',
        'text!areas/arena/ArenaTemplate.html'
    ],
    function(Backbone, Handlebars, MonsterBank, Enemy, EnemyParty, EnemyPartyView, ArenaTemplate) {
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
                return this;
            },

            spawnEnemyParty: function(){
                var enemyParty = new EnemyParty();
                for(var i = 0; i<Math.floor((Math.random() * 4)+1); i++){
                    var enemy = new Enemy();
                    var monster = MonsterBank.models[Math.floor(Math.random() * MonsterBank.length)];
                    enemy.set('_id', monster.get('_id'));
                    enemy.set('image', monster.get('image'));
                    enemy.set('name', monster.get('name'));
                    enemy.set('class', monster.get('class'));
                    enemy.set('description', monster.get('description'));
                    enemy.set('stats', monster.get('stats'));
                    enemyParty.add(enemy);
                }
                this.enemyPartyView = new EnemyPartyView({collection:enemyParty});
            }
        });
        return ArenaView;
    }
);