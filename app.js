(function(){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',function($scope){

    $scope.menu ="";
    $scope.resultPhrase="";

    $scope.checkMenu = function() {
      $scope.resultPhrase="Please enter data first";
      var numberOfPlates = calculateNumberOfPlates($scope.menu)
        if (numberOfPlates>0)
          $scope.resultPhrase= "Enjoy!";
        if (numberOfPlates>3)
          $scope.resultPhrase= "Too much!"

    };

    function calculateNumberOfPlates(cadena){
      var menu = cadena.split(',');
      console.log(menu.length);
      var espacios=0;
      for(var i=0;i<menu.length;i++){
        if(menu[i]=="")
          espacios++;
        }
      return (menu.length-espacios);
    }

  })
})();
