(function(){
    'use strict';

    angular.module('DIApp', [])

    // To protect the dependency injection from Minification
    // third aproach is

    .controller('DIController', DIController);
    
    DIController.$inject = ['$scope', '$filter'];
    // Angular will look for $inject proprty for the controller function
    // and if it finds it it will use its array as a guidance to see which service to inject into which argument
    
    function DIController ($scope, $filter){
        $scope.name = "";

        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }  
})();

/* ========================== */
// the Minified Code

/*!function(){"use strict";function e(e,n){e.name="",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();*/