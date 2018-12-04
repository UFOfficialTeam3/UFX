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
            
      edit: function(email, firstname, lastname, photo) {

        
        
        // get user id
        var user = JSON.parse(localStorage.getItem('user'));
        var uid = user.sub;

        var userInfo = {uid: uid, email: email, fname: firstname, lname: lastname}

        //Ready photo and user for request
        var payload = new FormData();
        payload.append('user', JSON.stringify(userInfo));
        payload.append('photo', photo);

//        return $http.put('http://localhost:8080/api/user', userInfo);

        return $http({
        //url: 'http://localhost:8080/api/user',
        url: herokuUrl + 'api/user',
        method: 'PUT',
        data: payload,
        body: JSON.stringify(userInfo),
        //assign content-type as undefined, the browser
        //will assign the correct boundary for us
        headers: { 'Content-Type': undefined},
        //prevents serializing payload.  don't do it.
        transformRequest: angular.identity
        });

      }, 

      getListingsByUser: function(uid){
        /* Gets listings by user id */
        //return $http.get('http://localhost:8080/api/listings/profile/' + uid)
        return $http.get(herokuUrl + 'api/listings/profile/' + uid)
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
  