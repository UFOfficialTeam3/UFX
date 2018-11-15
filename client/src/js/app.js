'use strict';
// heroku url
const herokuUrl = 'https://free-and-for-sale-team3.herokuapp.com/';

// Register App
const app = angular.module('app', ['auth0.auth0', 'ui.router']);

app.config(['angularAuth0Provider', '$stateProvider',
function config(angularAuth0Provider, $stateProvider) {

    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: '1oXEUQBPzfcr2q6R0Z5GQgWydPOtymlf',
      domain: 'ufx.auth0.com',
      responseType: 'token id_token',
      //redirectUri: 'http://localhost:8080/',
      redirectUri: herokuUrl,      
      audience: 'https://ufx.com/api',
      scope: "openid profile crud:db"
      
    });
     
    // Configure stateProvider stuff for listing-details routing
    $stateProvider
        .state('listing-details', {
            url: '/listing-details/:lid'
            
        })
                
}])


// forced to use auth0 for userInfo(). angularAuth0 apparently doesn't have this function.
auth0 = new auth0.WebAuth({
    clientID: '1oXEUQBPzfcr2q6R0Z5GQgWydPOtymlf',
    domain: 'ufx.auth0.com',
    responseType: 'token id_token',
    //redirectUri: 'http://localhost:8080/',
    redirectUri: herokuUrl,
    audience: 'https://ufx.com/api',
    scope: "openid profile crud:db"
    
  })