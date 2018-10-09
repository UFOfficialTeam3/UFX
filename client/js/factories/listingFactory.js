angular.module('listings', []).factory('Listings', function($http) {
  var heroku_url = 'https://vast-ridge-45618.herokuapp.com/';
  var methods = {
    getAll: function() {
      //return $http.get('http://localhost:8080/api/listings');
      return $http.get(heroku_url + 'api/listings');
    },
	
	  create: function(listing) {
      //return $http.post('http://localhost:8080/api/listings', listing);
      return $http.post(heroku_url + 'api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
      //console.log("calling listingFactory.js.delete(), id: " + id);
      //return $http.delete('http://localhost:8080/api/listings/' + id);
      return $http.delete(heroku_url + 'api/listings/' + id);

    }
  };

  return methods;
});
