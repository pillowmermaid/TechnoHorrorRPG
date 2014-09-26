/*
A parent view for the enemy party collecton.
*/

/*
TODO: 
Add functionality to allow same monster types to be added
into the party.
++Done

There seems to be a weird error where the beastiary doesn't load
and thus breaks the enemy party. Figure out why it doesn't load 
AND simply ensure it loads before hand. 
++monsterPicker was causing the issue; it has been fixed.

Add combat functions.

Create interesting stat scaling mechanic. Bonus points for different
schemas for different classes of enemies. Bind scaling to a level attribute?
*/
define(
    [
        'backbone',
        'app/domain/Repository',
        'app/framework/PartyUtilities',
        'app/hostile/EnemyParty',
        'app/hostile/EnemyUnitView',
        'text!app/hostile/EnemyPartyTemplate.html'
    ],
    function(Backbone, Repository, PartyUtilities, EnemyParty, EnemyUnitView, EnemyPartyTemplate){
       var EnemyPartyView = Backbone.View.extend({

            tagName: 'table',
            id: 'enemy-party-table',
            
            template: Handlebars.compile(EnemyPartyTemplate),

            initialize: function(){
                this.beastiary = Repository.getBeastiary();
                this.listenTo(this.beastiary, 'reset', this.generateParty);
            },

            render: function(){
                this.$el.html(this.template);
                return this;
            },

            generateParty: function(){
                var party = new EnemyParty();
                PartyUtilities.createParty(party, this.beastiary);
                this.renderParty(party);
            },

            /*createParty: function(){
                var party = new EnemyParty();
                var idArray = this.beastiary.pluck('_id');
                var enemyPartyArray = [];
                for(var i=0; i < 2; i++){
                    monsterPicker = Math.floor(Math.random()*3);
                    var newMonster = this.beastiary.at(monsterPicker).clone();
                    this.enemyInit(newMonster);
                    party.add(newMonster);
                }
                console.log("Enemy Party: ", party);
                this.renderParty(party);
            },

            enemyInit: function(enemy){
                this.setHP(enemy);
                this.setSTR(enemy);
                this.setDEF(enemy);
                this.setAGI(enemy);
            },

            setHP: function(enemy){
                var oldHP = enemy.get('stats').HP;
                var newHP = _.clone(enemy.get('stats'));
                var modHP = Math.floor(Math.random()*3+1);
                newHP.HP = oldHP * modHP;
                enemy.set('stats', newHP);
            },

            setSTR: function(enemy){
                var oldSTR = enemy.get('stats').STR;
                var newSTR = _.clone(enemy.get('stats'));
                var modSTR = Math.floor(Math.random()*3+1);
                newSTR.STR = oldSTR * modSTR;
                enemy.set('stats', newSTR);
            },

            setDEF: function(enemy){
                var oldDEF = enemy.get('stats').DEF;
                var newDEF = _.clone(enemy.get('stats'));
                var modDEF = Math.floor(Math.random()*3+1);
                newDEF.DEF = oldDEF * modDEF;
                enemy.set('stats', newDEF);
            },

            setAGI: function(enemy){
                var oldAGI = enemy.get('stats').AGI;
                var newAGI = _.clone(enemy.get('stats'));
                var modAGI = Math.floor(Math.random()*3+1);
                newAGI.AGI = oldAGI * modAGI;
                enemy.set('stats', newAGI);
            },*/

            renderParty: function(party){
                var enemies = [];
                for(var i=0; i < party.length; i++){
                    var enemy = party.models[i];
                    enemies[i] = new EnemyUnitView({model: enemy});
                    $(this.el).append(enemies[i].render().$el);
                }
            }
       });
       return EnemyPartyView;
    }
);