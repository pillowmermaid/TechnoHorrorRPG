define(
    [
        'backbone'
    ],
    function(Backbone){
        var Food = Backbone.Model.extend({
            initialize: function(){
                switch(this.get('group')){
                    case 'Balanced':
                        this.ingestBalance();
                        break;
                    case 'Aggressive':
                        this.ingestAggressor();
                        break;
                    case 'Sturdy':
                        this.ingestStoic();
                        break;
                    case 'Speedy':
                        this.ingestSwift();
                        break;
                    case 'Afternoon Snack':
                        this.ingestDefault();
                        break;
                    default:
                        console.log('WHAT DID I EAT?');
                        break;
                }
            },
            ingestAggressor: function(){
            
            },
            ingestBalance: function(){
                
            },
            ingestStoic: function(){ 
            
            },
            ingestSwift: function(){
            
            },
            ingestDefault: function(){
            
            }
        });
        return Food;
    }
);