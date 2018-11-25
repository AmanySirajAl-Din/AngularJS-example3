(function(){
'use strict';

angular.module('DIApp', [])

.controller('DIController', DIController);

// $filter service lets us create filtering functions
//that used for formatting the data that eventually gets displayed to the user
function DIController ($scope, $filter){
    $scope.name = "Amany";
}
    
})();