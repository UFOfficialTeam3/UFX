'use strict';

// TODO: change returnTo to redirect to homepage
// TODO: add redirect code to handleAuthentication


app.factory('authService', ['$timeout', 'angularAuth0', '$http', 
function($timeout, angularAuth0, $http) {

       
    function hello() {
        console.log('hello');
    }
    
    function login() {
        angularAuth0.authorize();
    }

    // Test send jwt to server
    function sendjwt(jwt) {
        console.log("Running authFactory's sendjwt().");
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/testjwt',
            headers: {'Authorization': 'Bearer ' + jwt}
        })
    }

    // looks for the result of authentication in the URL hash. 
    // Then, the result is processed with the parseHash method from auth0.js
    function handleAuthentication() {
        console.log("running handleAuthentication()");
        angularAuth0.parseHash(function(err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            setSession(authResult);
            //$state.go('home');
            //console.log('Dont forget to add redirect code!');
            
          } else if (err) {
            $timeout(function() {
              //$state.go('home');
              //console.log('Dont forget to add timeout redirect code!');

            });
            console.log('handleAuthentication error: ' + err.message);
            
          }
        });
      }
  
    function setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    
    function isAuthenticated() {
        // Check whether the current time is past the 
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    function logout() {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');

        // logout user from auth0 session        
        angularAuth0.logout({
            returnTo: 'http://localhost:8080/',
            client_id: '1oXEUQBPzfcr2q6R0Z5GQgWydPOtymlf'
        });
    }

    
    
    return {
        hello: hello,
        login: login,
        isAuthenticated: isAuthenticated,
        handleAuthentication: handleAuthentication,
        logout: logout,
        sendjwt: sendjwt,
        
        
    } 
}])