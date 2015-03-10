define(
    [
        'backbone',
        'handlebars',
        'parties/playerParty/Player',
        'parties/playerParty/PlayerPartyView',
        'text!parties/playerParty/PlayerTemplate.html'
    ],
    function(Backbone, Handlebars, Player, PlayerPartyView, PlayerTemplate){
       var PlayerView = Backbone.View.extend({
            el: '#player-menu',

            template: Handlebars.compile(PlayerTemplate),

            initialize: function(){
                this.model = new Player();
                this.on('hit', this.render, this);
                this.on('levelUp', this.levelUp, this);
                this.on('dead', this.dead, this);
                this.on('respawn',this.respawn, this);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            hit: function(){
                console.log('I got hit!');
            },

            dead: function(){
                alert('I\'m dead!');
                this.model.destroy();
                this.trigger('respawn');
            },

            respawn: function(){
                this.model = new Player();
                this.render();
            }
       });
       return new PlayerView;
    }
);