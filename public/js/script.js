'use strict';

angular.module('App', ['ngResource','ui.bootstrap', 'ui.router', 'ui.navbar','ngRadialGauge'])

.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home.html"
    })
    .state('cisternaDash', {
      url: "/cisternaDash",
      templateUrl: "partials/cisternaDash.html",
    controller: 'cisternaDashCtrl'
    })
    .state('caixaDash', {
      url: "/caixaDash",
      templateUrl: "partials/caixaDash.html",
    controller: 'caixaDashCtrl'
    })
  .state('relatorio', {
      url: "/relatorio",
      templateUrl: "partials/relMensal2.html",
    controller: 'tableJsonCtrl3'
    })
  .state('relbl5', {
      url: "/relbl5",
      templateUrl: "partials/relbl5.html",
    controller: 'bl5Ctrl'
    })
  .state('relcistenas', {
      url: "/relcistenas",
      templateUrl: "partials/relcisternas.html",
    controller: 'cisternasCtrl'
    })
    .state('espGourmet', {
      url: "/espGourmet",
      templateUrl: "partials/RadialGaugeDemo.html",
    controller: 'RadialGaugeDemoCtrl'
    });
})

.controller('NavigationController', function($scope) {

  $scope.allMenuItens = [
    
  {
    name: "Nivel Reservatório",
    link: "#",
    subtree: [{
      name: "Cisterna",
      link: "cisternaDash"
    }, {
      name: "Caixa d'Agua",
      link: "caixaDash"
    }]
  }, 

 {
    name: "Relatório",
    link: "#",
    subtree: [{
      name: "Bloco 5",
      link: "relbl5"
    }, {
      name: "Cisternas",
      link: "relcistenas"
    }, {
      name: "Geral",
      link: "relatorio"
    }]
  },
   {
    name: "Espaço Gourmet",
    link: "#",
    subtree: [{
      name: "Espaço Gourmet",
      link: "espGourmet"
    }]
  },
  
  ]
});
