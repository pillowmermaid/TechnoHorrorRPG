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
        			'HP': this.statRoller(this.get('stats').HP,'MID'),
        			'POW': this.statRoller(this.get('stats').POW,'LOW'),
        			'DEF': this.statRoller(this.get('stats').DEF,'HIGH'),
        			'AGI': this.statRoller(this.get('stats').AGI,'HIGH')
        		}
        		this.set({'stats': stats});
        	},
        	spawnBalance: function(){
        		var stats = {
        			'HP': this.statRoller(this.get('stats').HP,'MID'),
        			'POW': this.statRoller(this.get('stats').POW,'MID'),
        			'DEF': this.statRoller(this.get('stats').DEF,'MID'),
        			'AGI': this.statRoller(this.get('stats').AGI,'MID')
        		}
        		this.set({'stats': stats});
        	},
        	spawnStoic: function(){	
        		var stats = {
        			'HP': this.statRoller(this.get('stats').HP,'MID'),
        			'POW': this.statRoller(this.get('stats').POW,'HIGH'),
        			'DEF': this.statRoller(this.get('stats').DEF,'LOW'),
        			'AGI': this.statRoller(this.get('stats').AGI,'HIGH')
        		}
        		this.set({'stats': stats});
        	},
        	spawnSwift: function(){
        		var stats = {
        			'HP': this.statRoller(this.get('stats').HP,'HIGH'),
        			'POW': this.statRoller(this.get('stats').POW,'MID'),
        			'DEF': this.statRoller(this.get('stats').DEF,'HIGH'),
        			'AGI': this.statRoller(this.get('stats').AGI,'LOW')
        		}
        		this.set({'stats': stats});
        	},
        	statRoller: function(stat, level){
                var roller = level.toUpperCase();
                var stat;
                switch(roller){
                    case 'HIGH':
                        stat = Math.floor(Math.random()*((stat+3)-(stat-3)+1))+(stat-3);
                        break;
                    case 'MID' || 'MEDIUM' || 'MED':
                        stat = Math.floor(Math.random()*((stat+2)-(stat-2)+1))+(stat-2);
                        break;
                    case 'LOW':
                        stat = Math.floor(Math.random()*((stat+1)-(stat-1)+1))+(stat-1);
                        break;
                    default:
                        console.log(roller,'is an invalid modifier!');
                        break
                    }
                if (stat <= 0 ){ stat = 1;}
                return stat
        	}
        });
        return Enemy;
    }
);