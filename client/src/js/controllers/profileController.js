app.controller('profileController', ['$scope', 'Profile', 
  function($scope, Profile) {
    
    /**The Controller makes functions available to be called from the html and
     * updates the view if necessary
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */
    
    $scope.page = undefined; 

    var init = function() {
      $scope.page = 'profile'
    } 

    init();

    Profile.getUser().then(function(response) {
      
        $scope.user = response.data;
        console.log(response.data);
      }, function(error) {
        console.log('Unable to retrieve user:', error);
      });
    

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

    $scope.loginUser = function(UserId) {
     /**TODO
     * Calls userFactory to login the user
     */
    }

    $scope.rateSeller = function(SellerObject_or_SellerId) {
        /**TODO
        * Calls userFactory to rate the seller
        */
    }

    $scope.rateBuyer = function(BuyerObject_or_BuyerId) {
      /**TODO
        * Calls userFactory to rate the buyer
        */
    }

       

  }
]);