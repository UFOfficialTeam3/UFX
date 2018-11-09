'use strict';

//TODO: get user profile from Auth0


app.controller('authController', ['authService', '$scope', '$timeout', 
    function(authService, $scope, $timeout) {
    var vm = this;    
    
    vm.isAuthenticated = authService.isAuthenticated;
    vm.login = authService.login;
    vm.logout = authService.logout;

    console.log("Hello from authController");
    
    // DEBUG: This function is called once everytime this page is loaded (with this controller attatched of course)
    console.log("handle auth: " + authService.handleAuthentication());
    
    // DEBUG: Checks if user is logged in
    console.log("is auth: " + authService.isAuthenticated());
    
    // Promise isAuthenticated()
    var willRedirectToLogin = new Promise(
        function (resolve, reject) {
            if(!authService.isAuthenticated()) {
                resolve("Promise resolved. User not logged in");
            } else {
                var reason = new Error('Promise Rejected. User is already logged in.');
                reject(reason);
            }

        }
    );
    
    // call our promise
    vm.askRedirect = function () {
        willRedirectToLogin
            .then(function(fulfilled) {
                // yes, we must redirect to login page
                console.log(fulfilled);
                authService.login();
            })
            .catch(function (error) {
                // nope, no need to redirect to homepage
                console.log(error.message);
            });
    };

    // check login, redirect if necess.
    //askRedirect();

    vm.areTokens = function() { // used to check that handleAuthentication runs properly on page load.
        
        var is_access = localStorage.getItem('access_token');
        var is_id = localStorage.getItem('id_token');
        var is_expires = localStorage.getItem('expires_at');

        console.log("access_token: " + is_access);
        console.log("id_token: " + is_id);
        console.log("expires_at: " + is_expires);
        
    }
    
    // test getting user profile
    vm.userProfile = {};
    vm.getUserProfile = function() {
        console.log("Getting User Profile");
        var access_token = localStorage.getItem('access_token');
        
        if(!access_token){
            console.log('Error: access token required for getUserProfile');
            return
        } 
        else {
            auth0.client.userInfo(access_token, function(err, user) {
                if(err){
                    console.log(err);
                }
                //console.log(user);
                $scope.userProfile = user;
                
            });
        }
        
    }

    vm.displayUserProfile = function() {
        console.log(vm.userProfile);
    }

    return vm;    
    
    

}])