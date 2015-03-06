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
                this.on('fightMe', this.battle, this);
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            battle: function(enemy){
                console.log('enemy',enemy);
            }
       });
       return new PlayerView;
    }
);