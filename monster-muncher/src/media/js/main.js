require(
    [
        'jquery',
        'app/App'
    ],
    function($, App){
        'use strict';

        $.ajaxSetup({timeout: 20000});

        App.start();
    }
);