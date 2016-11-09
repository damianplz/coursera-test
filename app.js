(function(){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',function($scope){

    $scope.menu ="";
    $scope.resultPhrase="";

    $scope.checkMenu = function() {
      var aux = $scope.menu;
      aux=aux.split(',');
      var numberOfPlates = calculateNumberOfPlates(aux);
        if(numberOfPlates==0)
          $scope.resultPhrase="Please enter data first";
        if (numberOfPlates>0)
          $scope.resultPhrase= "Enjoy!";
        if (numberOfPlates>3)
          $scope.resultPhrase= "Too much!"

    };

    function calculateNumberOfPlates(cadena){
      console.log(cadena.length);
      var espacios=0;
      for(var i=0;i<cadena.length;i++){
        if(cadena[i]==""){
          espacios++;
          console.log("Espacios: " +espacios + " Cadena: " + cadena.length);
        }
      }
      return (cadena.length-espacios);
    }

  })
})();
