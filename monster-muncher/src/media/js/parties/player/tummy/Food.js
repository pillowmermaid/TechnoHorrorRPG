define(
    [
        'backbone'
    ],
    function(Backbone){
        var Food = Backbone.Model.extend({
            initialize: function(){
                switch(this.get('group')){
                    case 'Balance':
                        this.ingestBalance();
                        break;
                    case 'Aggressor':
                        this.ingestAggressor();
                        break;
                    case 'Stoic':
                        this.ingestStoic();
                        break;
                    case 'Swift':
                        this.ingestSwift();
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
            }
        });
        return Food;
    }
);