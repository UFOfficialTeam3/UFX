'use strict';


app.controller('authController', ['authService', '$scope', '$timeout', 
    function(authService, $scope, $timeout) {
    var vm = this;    
    
    vm.isAuthenticated = authService.isAuthenticated;
    vm.login = authService.login;
    vm.logout = authService.logout;

    console.log("Hello from authController");
    
    // DEBUG: This function is called once everytime this page is loaded (with this controller attatched of course)
    console.log("handle auth: " + authService.handleAuthentication());
    
    // on page load, double check user and put jwts in local storage
    authService.isAuthenticated();       

    // Store user's profile in localstorage so other controllers can access it
    function spaghetti() {
    var access_token = localStorage.getItem('access_token');
    if (access_token) {
        auth0.client.userInfo(access_token, function(err, user) {
            if(err){
                // an error cna happen if access token is expired
                console.log("userInfo error:", err);
                // if token is expired, remove from localStorage
                authService.logout();
            } else {
                console.log(user); // DEBUG
                localStorage.setItem('user', JSON.stringify(user));
            
                // check if user exists in database.
                authService.findByID(user.sub)
                    .then(
                        function(result) {
                            console.log("findByID result",result) // Output: data: ""
                            
                            // if user not in database
                            if (result.data == ""){
                                // add user to database
                                authService.createUser(user.sub)
                                    .then(
                                        function(result){
                                            console.log("createUser result",result);
                                        }, 
                                        function(error){console.log("createUser error",error)})
                            }

                        }, function(error) {console.log("findByID error",error)}
                    );

            }            
            
        });
    }
    }
    // give handleAuthentication a chance to put access tokens in local storage
    setTimeout(spaghetti, 1000);
        
    

    // DEBUG: function that fetches user profile from local storage
    vm.testUser = function() {
        var user = JSON.parse(localStorage.getItem('user')); // NULL if not in local storage
        console.log(user);      // print entire user profile
        console.log(user.sub);  // print user id
        console.log(user.name); // print email       
    }

    // Test sending jwt to server
    vm.sendjwt = function() {
        // check local storage for access token
        var jwt = localStorage.getItem('access_token');
        
        authService.sendjwt(jwt).then(function(response) {
            // This first function handles a successful response
            console.log(response);
        }, function(error) {
            // This second function handles an error
            console.log("error", error);
        })
    }
    
    // Promise isAuthenticated()
    var willRedirectToLogin = function() {
        return new Promise(
        function (resolve, reject) {
            if(!authService.isAuthenticated()) {
                resolve("Promise resolved. User not logged in");
            } else {
                var reason = new Error('Promise Rejected. User is already logged in.');
                reject(reason);               
                
            }

        }
        )
    }    
    // call our promise
    // implement this function in places where the user clicks a
    vm.askRedirect = function () {
        willRedirectToLogin()
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
    //vm.askRedirect();

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




    return vm;    
    
    

}])