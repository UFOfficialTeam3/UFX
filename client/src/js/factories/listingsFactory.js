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
        console.log(listing);
        payload.append('listing', JSON.stringify(listing));
        payload.append('file', file);

       
        //  console.log("printing file from factory: " + JSON.stringify(file));
        return $http({
        //url: 'http://localhost:8080/api/listings/',
        url: herokuUrl + 'api/listings/',
        method: 'POST',
        data: payload,
        body: JSON.stringify(listing),
        //assign content-type as undefined, the browser
        //will assign the correct boundary for us
        headers: { 'Content-Type': undefined},
        //prevents serializing payload.  don't do it.
        transformRequest: angular.identity
        });
        
        
      },

      findByID: function(listingId) {
        //return $http.get('http://localhost:8080/api/listings/' + listingId)
        return $http.get(herokuUrl + 'api/listings/' + listingId)
        
      },

      getAll: function () {
        /**TODO
         * Make http get request to retrieve all listings in database
         */
        console.log("Calling factory.getAll()");
        //return $http.get('http://localhost:8080/api/listings/');
        return $http.get(herokuUrl + 'api/listings/');
      
      },

      sendEmail: function(confirmedLocation){
        var confirmedLocationJSON = {location: confirmedLocation}
        //return $http.post('http://localhost:8080/api/listings/email', confirmedLocationJSON);
        return $http.post(herokuUrl + 'api/listings/email', confirmedLocationJSON);

      },
      
      delete: function(listingId) {
        //return $http.delete('http://localhost:8080/api/listings/' + listingId)
        return $http.delete(herokuUrl + 'api/listings/' + listingId)
        
      }, 

      setLid: function(listingId) {
        savedLid = listingId;
        
      },

      getLid: function(listingId) {savedLid = listingId},
  
      

    };
  
    return methods;
  });
  