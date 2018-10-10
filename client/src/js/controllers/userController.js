angular.module('listings').controller('userController', ['$scope', 'Listings', 
  function($scope, Listings) {
    
    /**The Controller makes functions available to be called from the html and
     * updates the view if necessary
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */


    $scope.getUserDetails = function(UserId) {
     /**TODO
     * Calls userFactory to get the user
     */
    }

    $scope.registerUser = function(UserId) {
     /**TODO
     * Calls userFactory to register the user
     */
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