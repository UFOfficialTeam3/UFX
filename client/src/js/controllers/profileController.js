angular.module('app').controller('profileController', ['$scope', 'Profile', 
  function($scope, Profile) {
    
    /**The Controller makes functions available to be called from the html and
     * updates the view if necessary
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */


    Profile.getUser().then(function(response) {
        $scope.user = response.data;
        console.log(response.data);
      }, function(error) {
        console.log('Unable to retrieve user:', error);
      });
    

    $scope.editUser = function() {
      console.log('editUser has been called')
        Profile.edit().then(function(response){
          console.log('editUser receieved from http.put: ' + response.data);
          $scope.user = response.data;
        }, function(error) {
          console.log('Unable to update user:', error);
        });
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