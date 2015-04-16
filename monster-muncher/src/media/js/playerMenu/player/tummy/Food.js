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
                console.log('AGRES');
            },
            ingestBalance: function(){
                console.log('BAL');
            },
            ingestStoic: function(){ 
                console.log('STOI');
            },
            ingestSwift: function(){
                console.log('SWIFT');
            },
            ingestDefault: function(){
                console.log('yum.');
            }
        });
        return Food;
    }
);