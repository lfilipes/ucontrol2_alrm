(function () {
    'use strict';

angular
	.module('App')
    .controller('navbarCtrl', navbarCtrl);
	

	function navbarCtrl($scope,$location,$localStorage,AuthenticationService) {
		
	var vm = this;
	
	vm.isLoggedIn = false;
	
	 if ($localStorage.currentUser) {
        vm.isLoggedIn=true;  
		vm.currentUser = $localStorage.currentUser;
     };

	vm.allMenuItens = [
		
	  {
		name: "Nivel Reservatório",
		link: "#",
		subtree: [{
		  name: "Cisterna 1",
		  link: "cisternaDash_b2"
		}, {
		  name: "Cisterna 2",
		  link: "cisternaDash_b5"
		}, {
		  name: "Caixa Bloco 1",
		  link: "caixaDash_b1"
		}, {
		  name: "Caixa Bloco 2",
		  link: "caixaDash_b2"
		}, {
		  name: "Caixa Bloco 3",
		  link: "caixaDash_b3"
		}, {
		  name: "Caixa Bloco 4A",
		  link: "caixaDash_b4a"
		}, {
		  name: "Caixa Bloco 4B",
		  link: "caixaDash_b4b"
		}, {
		  name: "Caixa Bloco 5A",
		  link: "caixaDash_b5a"
		}, {
		  name: "Caixa Bloco 5B",
		  link: "caixaDash_b5b"
		}, {
		  name: "Caixa Bloco 6A",
		  link: "caixaDash_b6a"
		}, {
		  name: "Caixa Bloco 6B",
		  link: "caixaDash_b6b"
		}
		 ]
	  }, 

	 {
		name: "Relatórios",
		link: "#",
		subtree: [{
		  name: "Cisternas 1 ",
		  link: "relcisternas"
		},{
		  name: "Cisternas 2",
		  link: "relcisterna2"
		}, {
		  name: "Bloco 1",
		  link: "relbl1"
		},
		{
		  name: "Bloco 2",
		  link: "relbl2"
		},
		{
		  name: "Bloco 3",
		  link: "relbl3"
		}, {
		  name: "Bloco 4A",
		  link: "relbl4a"
		}, {
		  name: "Bloco 4B",
		  link: "relbl4b"
		}, {
		  name: "Bloco 5A",
		  link: "relbl5"
		}, {
		  name: "Bloco 5B",
		  link: "relbl5b"
		}, {
		  name: "Bloco 6A",
		  link: "relbl6a"
		}, {
		  name: "Bloco 6B",
		  link: "relbl6b"
		},
		{
		  name: "Geral",
		  link: "relatorio"
		}
		]
	  },
	   /*{
		name: "Espaço Gourmet",
		link: "#",
		subtree: [{
		  name: "Espaço Gourmet",
		  link: "espGourmet"
		}]
	  },
	
	   {
		name: "Light Control",
		link: "#",
		subtree: [{
		  name: "Light Control",
		  link: "switch"
		}]
	  }*/
	  {
		name: "Monitoramento",
		link: "#",
		subtree: [{
		  name: "Ampliar Tela",
		  link: "singlescreen"
		}]
	}
	
	  ]
	};
	
	})();
