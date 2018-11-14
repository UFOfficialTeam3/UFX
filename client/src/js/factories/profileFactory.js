angular.module('app', []).factory('Profile', function($http) {
    var methods = {
      getUser: function() {
        var user = JSON.parse(localStorage.getItem('user'));

        // get user id
        var uid = user.sub;

        return $http.get('http://localhost:8080/api/user', {params: { id: uid }});
      },
            
      edit: function() {
        var user = JSON.parse(localStorage.getItem('user'));

        // get user id
        var uid = user.sub;

        return $http.put('http://localhost:8080/api/user', uid);
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
  