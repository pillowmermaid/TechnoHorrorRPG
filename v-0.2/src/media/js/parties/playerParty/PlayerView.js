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
            tagName: 'div',
            className: 'player',

            template: Handlebars.compile(PlayerTemplate),


            initialize: function(){
                this.model = new Player();
                this.listenTo(this.model, 'change', this.render);
            },

            renderToTarget: function(target){
                target.html(this.template(this.model.toJSON()));
                return this;
            },

            render: function(){
                $('#player-menu').html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return new PlayerView;
    }
);