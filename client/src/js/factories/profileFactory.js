app.factory('Profile', ['$http', 
function($http) {
    var methods = {
      getUser: function() {
        var user = JSON.parse(localStorage.getItem('user'));

        // get user id
        var uid = user.sub;
        console.log("profileFactory getUser has been called")
        //return $http.get('http://localhost:8080/api/user', {params: { id: uid }});
        return $http.get(herokuUrl + 'api/user', {params: { id: uid }});
      },
            
      edit: function(email, firstname, lastname) {
        var user = JSON.parse(localStorage.getItem('user'));
        
        // get user id
        var uid = user.sub;
        var userInfo = {uid: uid, email: email, fname: firstname, lname: lastname}
        console.log("This is the userid from profileFactory: " + uid);

        //return $http.put('http://localhost:8080/api/user', userInfo);
        return $http.put(herokuUrl + 'api/user', userInfo);
      }, 
  
      delete: function(id) {
         /**TODO
          return result of HTTP delete method
         */
        //return $http.delete('http://localhost:8080/api/listings/' + id);
        return $http.delete(herokuUrl + 'api/listings/' + id);   
      }
    };
  
    return methods;
  }]);
  