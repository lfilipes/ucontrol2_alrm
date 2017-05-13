(function () {
    'use strict';
 
    angular
        .module('App')
        .controller('loginCtrl', Controller);
 
    function Controller($location, $rootScope, AuthenticationService) {
        var vm = this;
 
        vm.login = login;
  
        function login() {
            vm.loading = true;
            AuthenticationService.Login(vm.email, vm.password, function (result) {
                if (result === true) {
					console.log("passei aqui");
                    $location.path('/dash');
						if (!$rootScope.$$phase) $rootScope.$apply();
                } else {
                    vm.error = 'Email or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }
})();