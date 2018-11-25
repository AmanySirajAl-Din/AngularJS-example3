(function(){
    'use strict';

    angular.module('DIApp', [])

    // To protect the dependency injection from Minification
    // first aproach is
    // specify an array giving it the arguments of the controller function and the last element will be the controller function itself
    // so no matter the minification does to the arguments it's already been specified
    // the array elements is saved from minification cause they are string literal that will never get mimified cause it's real data

    .controller('DIController', DIController);

    // $filter service lets us create filtering functions
    //that used for formatting the data that eventually gets displayed to the user

    // $injector service is the service which do all the magic
    // of finding where to inject which services 
    function DIController ($scope,
                            $filter, 
                            $injector){
        $scope.name = "";

        // function will run when the textbox loses focus
        // this function will convert the text in the textbox to uppercase
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        console.log($injector.annotate(DIController));
        // this will return an array of the arguments of the DIController
    }  
})();