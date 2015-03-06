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
                this.on('hit', this.hit, this);
                this.on('levelUp', this.levelUp, this);
                this.on('dead', this.dead, this);
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                console.log('rendering');
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            hit: function(damage){
                console.log('damage',damage);
            },

            dead: function(){
                alert('I\'m dead!');
                this.model.destroy();
                this.respawn();
            },

            respawn: function(){
                this.model = new Player();
            }
       });
       return new PlayerView;
    }
);