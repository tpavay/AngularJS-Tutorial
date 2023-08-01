// IIFE declaration
(() => {
  "use strict";

  // Define our module. The module has no dependencies so the dependency array is empty.
  angular
    .module("NameCalculator", [])
    // Define our controller (viewModel)
    .controller("nameCalculatorController", ($scope) => {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function () {
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };
    });

  // Calculates the ASCII value of a given string
  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }
})();
