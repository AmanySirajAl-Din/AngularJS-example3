(function(){
    'use strict';

    angular.module('DIApp', [])

    // To protect the dependency injection from Minification
    // first aproach is
    // specify an array giving it the arguments of the controller function and the last element will be the controller function itself
    // so no matter the minification does to the arguments it's already been specified
    // the array elements is saved from minification cause they are string literal that will never get mimified cause it's real data

    /*.controller('DIController', ['$scope', '$filter', '$injector', DIController]);*/
    
    // 2nd aproach to do an inline function
    .controller('DIController', ['$scope', '$filter', '$injector', function($scope,
                $filter, 
                $injector){
       $scope.name = "";

        // function will run when the textbox loses focus
        // this function will convert the text in the textbox to uppercase
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }; 
    }]);

    // $filter service lets us create filtering functions
    //that used for formatting the data that eventually gets displayed to the user
})();

/* =========================== */
// the Minified code

/*!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter","$injector",function(e,n,r){e.name="",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}])}();*/