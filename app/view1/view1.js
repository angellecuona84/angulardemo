'use strict';

angular.module('test.view1', ['ngRoute'])

.config(["$routeProvider", function ($routeProvider){
   $routeProvider
      .when('/view1',
      {
        controller: 'SimpleController',
        controllerAs:'vm',
        templateUrl: 'view1/view1.html'
      })
      .when('/view2',{
        controller: 'SimpleController',
        templateUrl: 'view2/view2.html'
      })
      .otherwise({redirectTo: '/view1'});
}])

.controller('SimpleController', [function() {
      var vm = this;
        vm.personas = [
        {name:'Angel Lecuona',city:'Lajas'},
        {name:'Yanet Taramo',city:'Banes'},
        {name:'Reti Lazara',city:'Otro'}
      ];

        vm.addPersona = function(){
            vm.personas.push(
            {
              name: vm.nuevaPersona.name,
              city: vm.nuevaPersona.city
            });
            vm.formVisibility = false;

            vm.nuevaPersona.name = "";
            vm.nuevaPersona.city = "";
      };

        vm.formVisibility = false;

        vm.mostrarFormulario = function(){
            vm.formVisibility = true;
      };

        vm.eliminar = function(index){
            vm.personas.splice(index,1); 
        };

}]);