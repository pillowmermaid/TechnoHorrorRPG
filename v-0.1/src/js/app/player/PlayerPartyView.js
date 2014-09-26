/*
A parent view for the player party collecton.
*/

/*
TODO:
EnemyParty and PlayerParty Views are virtually identical, creating a prototype
view may be a nice solution to avoid repeating code.
--Could transfer all the initialization methods to a generic "MonsterView" and then 
simply have different views for each party?
--Need to figure out how to make them distinguish between which sources they would draw 
their base monsters from.

Add functionality to save current party to a JSON file and load from that 
instead of randomly generating monsters from the beastiary within the view.

Add combat functions.

Create interesting stat scaling mechanic. Bonus points for different
schemas for different classes of enemies. Bind scaling to a level attribute?
*/

define(
    [
        'backbone',
        'app/domain/Repository',
        'app/player/PlayerUnitView',
        'text!app/player/PlayerPartyTemplate.html'
    ],
    function(Backbone, Repository, PlayerUnitView, PlayerPartyTemplate){
       var PlayerPartyView = Backbone.View.extend({

            tagName: 'table',
            id: 'enemy-party-table',
            
            template: Handlebars.compile(PlayerPartyTemplate),

            initialize: function(){
                this.beastiary = Repository.getBeastiary();
                this.listenTo(this.beastiary, 'reset', this.createParty);
            },

            render: function(){
                this.$el.html(this.template);
                return this;
            },

            createParty: function(){
                var party = new Backbone.Collection();
                var idArray = this.beastiary.pluck('_id');
                var enemyPartyArray = [];
                for(var i=0; i < 2; i++){
                    monsterPicker = Math.floor(Math.random()*3);
                    var newUnit = this.beastiary.at(monsterPicker).clone();
                    this.unitInit(newUnit);
                    party.add(newUnit);
                }
                console.log("Player Party: ", party);
                this.renderParty(party);
            },

            unitInit: function(unit){
                this.setHP(unit);
                this.setSTR(unit);
                this.setDEF(unit);
                this.setAGI(unit);
            },

            setHP: function(unit){
                var oldHP = unit.get('stats').HP;
                var newHP = _.clone(unit.get('stats'));
                var modHP = Math.floor(Math.random()*3+1);
                newHP.HP = oldHP * modHP;
                unit.set('stats', newHP);
            },

            setSTR: function(unit){
                var oldSTR = unit.get('stats').STR;
                var newSTR = _.clone(unit.get('stats'));
                var modSTR = Math.floor(Math.random()*3+1);
                newSTR.STR = oldSTR * modSTR;
                unit.set('stats', newSTR);
            },

            setDEF: function(unit){
                var oldDEF = unit.get('stats').DEF;
                var newDEF = _.clone(unit.get('stats'));
                var modDEF = Math.floor(Math.random()*3+1);
                newDEF.DEF = oldDEF * modDEF;
                unit.set('stats', newDEF);
            },

            setAGI: function(unit){
                var oldAGI = unit.get('stats').AGI;
                var newAGI = _.clone(unit.get('stats'));
                var modAGI = Math.floor(Math.random()*3+1);
                newAGI.AGI = oldAGI * modAGI;
                unit.set('stats', newAGI);
            },

            renderParty: function(party){
                var playerParty = [];
                for(var i=0; i < party.length; i++){
                    var playerUnit = party.models[i];
                    playerParty[i] = new PlayerUnitView({model: playerUnit});
                    $(this.el).append(playerParty[i].render().$el);
                }
            }
       });
       return PlayerPartyView;
    }
);