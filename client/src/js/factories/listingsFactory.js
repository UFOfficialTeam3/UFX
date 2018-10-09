angular.module('listings', []).factory('Listings', function($http) {

    /**Map API methods
     * Add any methods that may be neccessary
     * The factory is responsible for making api calls
     * The methods here will be called by the mapController
     */
    var methods = {
      loadMap: function() {
        /**TODO
         * Return fresh loaded map
         */
        //Example: return $http.get('http://localhost:8080/api/listings');
      },
      
        buyerlocationChoice: function(listing) {
        /**TODO
         * Return result of buyer location meetup choice
         */
        //Example: return $http.post('http://localhost:8080/api/listings', listing);
        
      }, 
  
      sellerlocationChoice: function(id) {
         /**TODO
          Return result of seller location meetup choice
         */
        //Example: return $http.delete('http://localhost:8080/api/listings/' + id);
  
      }
    };
  
    return methods;
  });
  