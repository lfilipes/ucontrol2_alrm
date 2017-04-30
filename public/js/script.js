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
    .state('caixaDash2A', {
      url: "/caixaDash2A",
      templateUrl: "partials/caixaDash2A.html",
    controller: 'caixaDashCtrl2A'
    })
    .state('caixaDash3A', {
      url: "/caixaDash3A",
      templateUrl: "partials/caixaDash3A.html",
    controller: 'caixaDashCtrl3A'
    })
    .state('caixaDash5A', {
      url: "/caixaDash5A",
      templateUrl: "partials/caixaDash5A.html",
    controller: 'caixaDashCtrl5A'
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
  .state('relbl2', {
      url: "/relbl2",
      templateUrl: "partials/relbl2.html",
    controller: 'bl2Ctrl'
    })
   .state('relbl3', {
      url: "/relbl3",
      templateUrl: "partials/relbl3.html",
    controller: 'bl3Ctrl'
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
      name: "Caixa d'Agua Bloco 2",
      link: "caixaDash2A"
    }, {
      name: "Caixa d'Agua Bloco 3",
      link: "caixaDash3A"
    }, {
      name: "Caixa d'Agua Bloco 5",
      link: "caixaDash5A"
    }
    ]
  }, 

 {
    name: "Relatório",
    link: "#",
    subtree: [{
      name: "Cisternas",
      link: "relcistenas"
    }, {
      name: "Bloco 2",
      link: "relbl2"
    }, {
      name: "Bloco 3",
      link: "relbl3"
    }, {
      name: "Bloco 5",
      link: "relbl5"
    }, {
      name: "Geral",
      link: "relatorio"
    }
    ]
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
