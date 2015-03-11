define(
    [
        'backbone'
    ],
    function(Backbone){
        var Player = Backbone.Model.extend({
        	defaults:{
        		_id: 00,
        		image: "",
        		name: "Fight Man",
                family: "",
        		class: "Fightin",
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
            }
        });
        return Player;
    }
);