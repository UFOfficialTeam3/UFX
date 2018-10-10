angular.module('listings', []).factory('Auth', function($http) {

    /**Authentication API methods
     * Add any methods that may be neccessary
     * The factory is responsible for making api calls
     * The methods here will be called by the authController
     */
	 
	 // Helpful resource: http://jasonwatmore.com/post/2014/05/26/angularjs-basic-http-authentication-example
	 
    var methods = {

      login: function(username, password) {
        /**TODO
         * Return login credinentials so user can login
         */
        //Example: return $http.get('http://localhost:8080/api/listings');
      },
      
      register: function(username, password) {
        /**TODO
         * Return new user login credinentials?
         */
        //Example: return $http.post('http://localhost:8080/api/listings', listing);
        
      }, 

      googleRegister: function(SomeGoogleAPIObject){
        /**TODO
         * Return new user login credinentials?
         */
      },
  
      googleLogin: function(SomeGoogleAPIObject) {
         /**TODO
          Return login credinentials so user can login
         */
        //Example: return $http.delete('http://localhost:8080/api/listings/' + id);
  
      }
    };
  
    return methods;
  });
  