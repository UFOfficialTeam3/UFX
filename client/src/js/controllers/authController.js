'use strict';

//TODO: get user profile from Auth0
//TODO: change registration page. Require First, Last name

app.controller('authController', ['authService', '$timeout', function(authService, $timeout) {
    var vm = this;

    // This function is called once everytime this page is loaded (with this controller attatched of course)
    authService.handleAuthentication();         

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
                vm.userProfile = user;
                
            });
        }
        
    }

    vm.displayUserProfile = function() {
        console.log(vm.userProfile);
    }

        
    vm.login = authService.login;
    vm.isAuthenticated = authService.isAuthenticated;
    vm.handleAuthentication = authService.handleAuthentication;
    vm.logout = authService.logout;
    

}])