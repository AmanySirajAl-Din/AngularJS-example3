(function(){
    'use strict';

    angular.module('DIApp', [])

    .controller('DIController', DIController);
    
    DIController.$inject = ['$scope', '$filter', '$injector'];

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