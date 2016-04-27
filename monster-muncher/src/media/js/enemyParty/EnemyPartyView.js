define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'monsterHouse/beastiary/MonsterBank',
        'enemyParty/EnemyParty',
        'enemyParty/EnemyView',
        'enemyParty/Enemy',
    ],
    function(Backbone, _, Handlebars, MonsterBank, EnemyParty, EnemyView, Enemy) {
        'use strict';
        var EnemyPartyView = Backbone.View.extend({
            el: '#enemy-party',

            render: function(){
                this.$el.html('');
                this.spawnParty();
                return this;
            },

            spawnParty: function(){
                /* ------------------------------------------------------------------
                 Un-comment this and comment out the chunk after to switch parties on
                ---------------------------------------------------------------------*/
                // var newParty = new EnemyParty();
                // for(var i = 0; i<Math.floor((Math.random() * 4)+1); i++){
                //     var monster = MonsterBank.models[Math.floor(Math.random() * MonsterBank.length)];
                //     var enemy = new Enemy({
                //         _id: monster.get('_id'),
                //         image: monster.get('image'),
                //         name: monster.get('name'),
                //         family: monster.get('family'),
                //         class: monster.get('class'),
                //         description: monster.get('description'),
                //         stats: monster.get('stats'),
                //     });
                //     newParty.add(enemy);
                // }
                // _.each(newParty.models, function(enemy){
                //     var newEnemy = new EnemyView({model:enemy});
                //     this.$el.append(newEnemy.render().el);
                // }, this)
                var monster = MonsterBank.models[Math.floor(Math.random() * MonsterBank.length)];
                var enemy = new Enemy({
                    _id: monster.get('_id'),
                    image: monster.get('image'),
                    name: monster.get('name'),
                    family: monster.get('family'),
                    class: monster.get('class'),
                    description: monster.get('description'),
                    stats: monster.get('stats'),
                });
                var newEnemy = new EnemyView({model:enemy});
                this.$el.append(newEnemy.render().el);
            },

        });
        return EnemyPartyView;
    } 
);

