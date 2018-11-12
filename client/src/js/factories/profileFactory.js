angular.module('app', []).factory('Profile', function($http) {
    var methods = {
      getUser: function() {
        var userID = 1;
        return $http.get('http://localhost:8080/api/user', {params: { id: 1 }});
      },
      
      edit: function() {
        var userID = {userID: 1};
        return $http.put('http://localhost:8080/api/user', userID);
      }, 
  
      delete: function(id) {
         /**TODO
          return result of HTTP delete method
         */
        return $http.delete('http://localhost:8080/api/listings/' + id);   
      }
    };
  
    return methods;
  });
  