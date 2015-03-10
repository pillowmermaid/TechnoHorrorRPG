define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'monsterHouse/beastiary/MonsterBank',
        'parties/enemyParty/EnemyParty',
        'parties/enemyParty/EnemyView',
        'parties/enemyParty/Enemy',
        'text!parties/enemyParty/EnemyPartyTemplate.html'
    ],
    function(Backbone, _, Handlebars, MonsterBank, EnemyParty, EnemyView, Enemy, EnemyPartyTemplate) {
        'use strict';
        var EnemyPartyView = Backbone.View.extend({
            el: '#enemy-party',

            template: Handlebars.compile(EnemyPartyTemplate),

            initialize: function(){
                this.on('')
            },

            render: function(){
                this.$el.html('');
                this.spawnParty();
                return this;
            },

            spawnParty: function(){
                console.log('SPAWNING');
                this.newParty = new EnemyParty();
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
                    this.newParty.add(enemy);
                }
                _.each(this.newParty.models, function(enemy){
                    var newEnemy = new EnemyView({model:enemy});
                    this.$el.append(newEnemy.render().el);
                }, this)
            },

            killMember: function(deadMan){
                this.party.remove(deadMan);
            }
        });
        return EnemyPartyView;
    } 
);

