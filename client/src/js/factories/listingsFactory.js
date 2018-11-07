'use strict';

app.factory('listingsFactory', function($http) {

    /**Listing API methods
     *The factory is responsible for making api calls that are then routed
     * to the server-side controllers
     * The methods here will be called by the listingsController
     */
    var methods = {
      add: function() {
        /**TODO
         * Make http post request
         */
        //Example: return $http.post('http://localhost:8080/api/listings');
      },
      
      delete: function(listingId) {
        /**TODO
         * Make http delete request
         */
        //Example: return $http.delete('http://localhost:8080/api/listings/' + id);
        
      }, 
  
      showDetails: function(listingId) {
         /**TODO
          Make http get request
         */
        //Example: return $http.get('http://localhost:8080/api/listings/' + id);
  
      },


    };
  
    return methods;
  });
  