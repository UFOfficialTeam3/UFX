'use strict';

// Register App
const app = angular.module('app', ['auth0.auth0'])

/** Configure Authentication */
.config(config)

config.$inject = [
    'angularAuth0Provider'
];

function config(angularAuth0Provider) {

    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: '1oXEUQBPzfcr2q6R0Z5GQgWydPOtymlf',
      domain: 'ufx.auth0.com',
      responseType: 'token id_token',
      redirectUri: 'http://localhost:8080/',
      audience: 'https://ufx.auth0.com/userinfo',
      scope: 'openid profile'
    });

}

// forced to use auth0 for userInfo(). angularAuth0 apparently doesn't have this function.
auth0 = new auth0.WebAuth({
    clientID: '1oXEUQBPzfcr2q6R0Z5GQgWydPOtymlf',
    domain: 'ufx.auth0.com',
    responseType: 'token id_token',
    audience: 'https://ufx.auth0.com/userinfo',
    redirectUri: 'http://localhost:8080/',
    scope: 'openid profile'
  })