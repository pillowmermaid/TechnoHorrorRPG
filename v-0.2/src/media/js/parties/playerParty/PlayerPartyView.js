define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'parties/playerParty/AllyView',
        'text!parties/playerParty/PlayerPartyTemplate.html'
    ],
    function(Backbone, _, Handlebars, AllyView, PlayerPartyTemplate) {
        'use strict';
        var PlayerPartyView = Backbone.View.extend({
            el: '#player-party',            
            tagName: 'div',
            className: 'allies',

            template: Handlebars.compile(PlayerPartyTemplate),

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
                this.allies = [];
                for(var i = 0; i<this.collection.length; i++){
                    var ally = new AllyView({model:this.collection.models[Math.floor(Math.random() * this.collection.length)]});
                    this.allies[i] = ally;
                }
            },

            renderParty: function(){
                for(var i = 0; i < this.collection.length; i++){
                    $('#player-party').append(this.allies[i].render().$el);
                }
            }
            
        });
        return PlayerPartyView;
    } 
);

