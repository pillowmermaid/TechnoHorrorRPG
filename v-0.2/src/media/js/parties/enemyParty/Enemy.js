define(
    [
        'backbone',
        'underscore'
    ],
    function(Backbone, _){
        var Enemy = Backbone.Model.extend({
        	initialize: function(){
        		switch(this.get('class')){
        			case 'Balance':
        				this.spawnBalance();
        				break;
        			case 'Aggressor':
        				this.spawnAggressor();
        				break;
        			case 'Stoic':
        				this.spawnStoic();
        				break;
        			case 'Swift':
        				this.spawnSwift();
        				break;
        			default:
        				console.log('WHAT AM I?');
        				break;
        		}
        	},
        	spawnAggressor: function(){
        		var stats = {
        			'HP': this.statMidRoller(this.get('stats').HP),
        			'POW': this.statLowRoller(this.get('stats').POW),
        			'DEF': this.statHighRoller(this.get('stats').DEF),
        			'AGI': this.statHighRoller(this.get('stats').AGI)
        		}
        		this.set({'stats': stats});
        	},
        	spawnBalance: function(){
        		var stats = {
        			'HP': this.statMidRoller(this.get('stats').HP),
        			'POW': this.statMidRoller(this.get('stats').POW),
        			'DEF': this.statMidRoller(this.get('stats').DEF),
        			'AGI': this.statMidRoller(this.get('stats').AGI)
        		}
        		this.set({'stats': stats});
        	},
        	spawnStoic: function(){	
        		var stats = {
        			'HP': this.statMidRoller(this.get('stats').HP),
        			'POW': this.statHighRoller(this.get('stats').POW),
        			'DEF': this.statLowRoller(this.get('stats').DEF),
        			'AGI': this.statHighRoller(this.get('stats').AGI)
        		}
        		this.set({'stats': stats});
        	},
        	spawnSwift: function(){
        		var stats = {
        			'HP': this.statHighRoller(this.get('stats').HP),
        			'POW': this.statMidRoller(this.get('stats').POW),
        			'DEF': this.statHighRoller(this.get('stats').DEF),
        			'AGI': this.statLowRoller(this.get('stats').AGI)
        		}
        		this.set({'stats': stats});
        	},
        	statHighRoller: function(stat){
        		return Math.floor(Math.random()*((stat+3)-(stat-3)+1))+(stat-3);
        	},
        	statMidRoller: function(stat){
        		return Math.floor(Math.random()*((stat+2)-(stat-2)+1))+(stat-2);
        	},
        	statLowRoller: function(stat){
        		return Math.floor(Math.random()*((stat+1)-(stat-1)+1))+(stat-1);
        	}
        });
        return Enemy;
    }
);