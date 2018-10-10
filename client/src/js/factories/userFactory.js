angular.module('listings', []).factory('userFactory', function($http) {

    /**Map API methods
     *The factory is responsible for making api calls that are then routed
     * to the server-side controllers
     * The methods here will be called by the userController
     */
    var methods = {
      addUser: function() {
        /**TODO
         * Make http post request to register user
         */
        //Example: return $http.post('http://localhost:8080/api/register');
      },
      
      removeUser: function(userId) {
        /**TODO
         * Make http delete request to remove user
         */
        //Example: return $http.delete('http://localhost:8080/api/user/' + id);
        
      },

      loginUser: function() {
        /**TODO
         * Make http get request to login user
         */
        //Example: return $http.get('http://localhost:8080/api/user/' + id);
        
      },
      
      
  
      getUserDetails: function(listingId) {
         /**TODO
          Make http get request to get the user details
         */
        //Example: return $http.get('http://localhost:8080/api/userdetails/' + id);
  
      },

      rateBuyer: function(BuyerId) {
        /**TODO
          Make http post request to rate buyer
         */

         //Example: return $http.post('http://localhost:8080/api/user/' + id + '/buyerrate');
      },

      rateSeller: function(SellerId) {
        /**TODO
          Make http post request to rate seller
         */

         //Example: return $http.post('http://localhost:8080/api/user/' + id + '/sellerrate');

      }


    };
  
    return methods;
  });
  