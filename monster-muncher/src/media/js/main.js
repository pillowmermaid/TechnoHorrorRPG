require(
    [
        'jquery',
        'app/App'
    ],
    function($, App){
        'use strict';
        console.log('MAIN INITIALIZE');

        $.ajaxSetup({timeout: 20000});

        App.start();
    }
);