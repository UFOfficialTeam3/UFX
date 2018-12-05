app.controller('profileController', ['$scope', '$window', 'Profile', 'listingsFactory',
  function($scope, $window, Profile, listingsFactory) {

    /**The Controller makes functions available to be called from the html and
     * updates the view if necessary
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */

    $scope.page = undefined;
    $scope.user = undefined;

    var init = function() {
      $scope.page = 'profile'

      Profile.getUser().then(function(response) {

        $scope.user = response.data;
        console.log(response.data);
      }, function(error) {
        console.log('Unable to retrieve user:', error);
      });

    }

    init();




    $scope.editUser = function() {
      //Variables from edit account form

      var email = $scope.email
      var firstname = $scope.firstname
      var lastname = $scope.lastname
      // assumes picture has been input.. Needs error checking
      var photo = document.getElementById('file_upload').files[0]


      var modal = document.getElementById('editProfileModal')





      Profile.edit(email, firstname, lastname, photo).then(function(response){
        console.log('editUser receieved from http.put: ' + response.data);
        $scope.user = response.data;
      }, function(error) {
          console.log('Unable to update user:', error);
         });

      modal.style.display = "none";

    }
    $scope.showEditForm = function() { //when the user clicks the edit profile button, the modal form should appear
      console.log("modal should pop up")
      var modal = document.getElementById('editProfileModal')
      modal.style.display ="block";
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }

    //Gets a user's listings for the profile page
    $scope.getUserListings = function(uid) {
      
      //Used for loading screen purposes
      $scope.page = 'listings'
      $scope.loading=true;

      Profile.getListingsByUser(uid).then(function(response){
        
        $scope.listings = response.data;
        
        //Used for loading gif
        $scope.loading=false;
      }, function(error) {
          console.log('Could not get user listings:', error);
         });

    }


    $scope.deleteListing = function(uid, lid) {
      console.log("uid and lid: " + uid + " " + lid)


      listingsFactory.delete(lid).then(function(response){

        $scope.getUserListings(uid);
        


      }, function(error) {
          console.log('Could not delete user listing:', error);
         });

      $scope.page = 'listings'
    }

    $scope.rateBuyer = function(BuyerObject_or_BuyerId) {
      /**TODO
        * Calls userFactory to rate the buyer
        */
    }

  }
]);
