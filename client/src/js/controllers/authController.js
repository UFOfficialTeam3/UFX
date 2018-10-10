angular.module('listings').controller('authController', ['$scope', 'Listings', 
  function($scope, Listings) {
    
    /**The Controller makes functions available to be called from the html and 
     * updates the view if neccessary
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */
	
	// Helpful resource: http://jasonwatmore.com/post/2014/05/26/angularjs-basic-http-authentication-example

    $scope.login = function(username, password) {
       /**TODO
        * Calls authFactory to login user 
        */
    };

    $scope.register = function(username, password) {
       /**TODO
        * Calls authFactory to register user
        */
    };
    

    $scope.googleLogin = function(SomeGoogleAPIObject) { 
      /**TODO
        * Calls authFactory to login user using google auth credinentials
        */
    };

    $scope.googleRegister = function(SomeGoogleAPIObject) {
         /**TODO
           * Calls authFactory to register user using google auth credinentials
           */
    }
  }
]);