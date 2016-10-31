(function () {
'use strict';

var app = angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

   $scope.lunch = ""

   $scope.checkCount = function () {
        //$scope.stateOfBeing = "fed";
        console.log("here")
        $scope.lunch.trim()

        if ($scope.lunch == "") {
          $scope.msg = "Please enter data first."
        }
        else if ($scope.lunch == "  ") {
          $scope.msg = "Please enter data first."
        }
        else {
          var arrayOfStrings = $scope.lunch.split(',');
          $scope.msg = (arrayOfStrings.length <= 3) ? "Enjoy!":"Too much!"
        }
//var voteable = (age < 18) ? "Too young":"Old enough";

    };
};

})();
