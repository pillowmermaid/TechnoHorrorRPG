define(
    [
        'backbone'
    ],
    function(Backbone){
        var Player = Backbone.Model.extend({
        	defaults:{
        		_id: 00,
        		image: "",
        		name: "Meatbun",
                family: "",
        		class: "Pathetic",
        		stats:{
        			
        		}
        	},

            initialize: function(){
                this.set('stats',{
                    HP: Math.floor(Math.random()*6+4),
                    POW: Math.floor(Math.random()*7+4),
                    DEF: Math.floor(Math.random()*6+5),
                    AGI: Math.floor(Math.random()*5+2),
                });
            },

            damage: function(damage){
                this.set('stats', damage);
            },

            grow: function(){

            },

            heal: function(heal){
                var healthUp = _.clone(this.get('stats'));
                healthUp.HP += heal;
                this.set('stats', healthUp);
            },


        });
        return Player;
    }
);