// IIFE declaration
(() => {
  "use strict";

  // Define our module with no dependencies
  angular
    .module("NameCalculator", [])
    .controller("nameCalculatorController", ($scope) => {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function () {
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };
    });

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }
})();
