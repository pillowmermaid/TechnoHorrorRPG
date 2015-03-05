define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'parties/enemyParty/EnemyView',
        'text!parties/enemyParty/EnemyPartyTemplate.html'
    ],
    function(Backbone, _, Handlebars, EnemyView, EnemyPartyTemplate) {
        'use strict';
        var EnemyPartyView = Backbone.View.extend({
            el: '#enemy-party',

            template: Handlebars.compile(EnemyPartyTemplate),

            initialize: function(){
                this.spawnParty();
                this.render();
            },

            render: function(){
                this.$el.html(this.template);
                this.renderParty();
                return this;
            },

            spawnParty: function(){
                this.enemies = [];
                for(var i = 0; i<this.collection.length; i++){
                    var enemy = new EnemyView({model:this.collection.models[i]});
                    this.enemies[i] = enemy;
                }
            },

            renderParty: function(){
                for(var i = 0; i < this.collection.length; i++){
                    $('#enemy-party').append(this.enemies[i].render().$el);
                }
            }
            
        });
        return EnemyPartyView;
    } 
);

