define(
    [
        'backbone',
        'app/domain/beastiary'
    ],
    function(Backbone, Beastiary){
        'use strict';

        var _beastiary = new Beastiary();

        var _repository = {
            getBeastiary: function() { return _beastiary; },
        };

        _beastiary.fetch({
            reset: true
        });
         
        return _repository;
    }
);