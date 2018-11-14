'use strict';

app.factory('listingsFactory', function($http) {

    /**Listing API methods
     *The factory is responsible for making api calls that are then routed
     * to the server-side controllers
     * The methods here will be called by the listingsController
     */
    var savedLid = undefined;

    var methods = {
      add: function(listing) {
        /**TODO
         * Make http post request
         */
        
        return $http.post('http://localhost:8080/api/listings/', listing); 
        
      },

      findByID: function(listingId) {
        return $http.get('http://localhost:8080/api/listings/' + listingId)
        
      },

      getAll: function () {
        /**TODO
         * Make http get request to retrieve all listings in database
         */
        console.log("Calling factory.getAll()");
        return $http.get('http://localhost:8080/api/listings/');
      
      },

      sendEmail: function(confirmedLocation){
        return $http.post('http://localhost:8080/api/listings/email', confirmedLocation);

      },
      
      delete: function(listingId) {
        /**TODO
         * Make http delete request
         */
        //Example: return $http.delete('http://localhost:8080/api/listings/' + id);
        
      }, 

      hello: function() {
        console.log('hello');
      },

      setLid: function(listingId) {
        savedLid = listingId;
        
      },

      getLid: function(listingId) {savedLid = listingId},
  
      

    };
  
    return methods;
  });
  