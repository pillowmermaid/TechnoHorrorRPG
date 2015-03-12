define(
    [
        'backbone',
        'handlebars',
        'gameStates/BattleState',
        'parties/playerParty/Player',
        'parties/playerParty/PlayerTummyView',
        'text!parties/playerParty/PlayerTemplate.html'
    ],
    function(Backbone, Handlebars, BattleState, Player, PlayerTummyView, PlayerTemplate){
       var PlayerView = Backbone.View.extend({
            el: '#player-menu',

            template: Handlebars.compile(PlayerTemplate),

            events:{
                'click #player-digest': 'digest',
                'click #player-poop': 'poop'
            },

            initialize: function(){
                this.spawn();
                this.on('hit', this.hit, this);
                this.on('levelUp', this.levelUp, this);
                this.on('dead', this.dead, this);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                this.tummy = new PlayerTummyView();
                return this;
            },

            dead: function(){
                alert('I\'m dead!');
                this.model.unbind()
                this.model.destroy();
                this.spawn();
            },

            digest: function(){
                console.log('Digesting!')
            },

            evolve: function(){
                console.log('I\'m evolllviiiiing');
            },

            hit: function(payback){
                console.log(BattleState);
                this.model.set('stats', payback.playerStats);
                console.log(this.model.get('name'),'I took 1 damage and have',this.model.get('stats').HP,'HP left');
                if(this.model.get('stats').HP === 0){ this.dead(); }
                else{ BattleState.attackTarget(payback.attacker); }
            },

            levelUp: function(){
                console.log('Level uppu');
            },

            poop: function(){
                console.log('poop');
            },

            spawn: function(){
                this.model = new Player();
                this.listenTo(this.model,'change',this.render);
                this.render();
            }
       });
       return new PlayerView;
    }
);