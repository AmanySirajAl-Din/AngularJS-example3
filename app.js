(function(){
'use strict';

angular.module('DIApp', [])

.controller('DIController', DIController);

// $filter service lets us create filtering functions
//that used for formatting the data that eventually gets displayed to the user
function DIController ($scope, $filter){
    $scope.name = "";
    
    // functions will run when the textbox loses focus
    // this function will convert the text in the textbox to uppercase
    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };
}
    
})();