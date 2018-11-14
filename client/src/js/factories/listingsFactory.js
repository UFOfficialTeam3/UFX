'use strict';

app.factory('listingsFactory', function($http) {

    /**Listing API methods
     *The factory is responsible for making api calls that are then routed
     * to the server-side controllers
     * The methods here will be called by the listingsController
     */
    var savedLid = undefined;

    var methods = {
      add: function(listing, file) {
        /**TODO
         * Make http post request
         */
        var payload = new FormData();
        
        payload.append('listing', listing);
        payload.append('file', file);

        console.log(payload);
         
        return $http({
        url: 'http://localhost:8080/api/listings/',
        method: 'POST',
        data: payload,
        //assign content-type as undefined, the browser
        //will assign the correct boundary for us
        headers: { 'Content-Type': undefined},
        //prevents serializing payload.  don't do it.
        transformRequest: angular.identity
        });
        
        
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
        var confirmedLocationJSON = {location: confirmedLocation}
        return $http.post('http://localhost:8080/api/listings/email', confirmedLocationJSON);

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
  