'use strict';

app.controller('createListingsController', ['$scope', 'listingsFactory', 
  function($scope, listingsFactory) {
    
    $scope.newListing = {
      lid: undefined,     // How should users go about inputting a listing id??
      Title: undefined,
      Price: undefined,
      negotiable: undefined, // This field not in table.
      buyOrSell: undefined, // This field not in table.
      type: undefined,
      condition: undefined,
      pt_money: undefined,  // This field not in table.
      pt_venmo: undefined,  // This field not in table.
      pt_paypal: undefined,  // This field not in table.
      description: undefined,
      location: undefined, // This field not in table.
    }

    $scope.createListing = function() {
      console.log($scope.newListing);

      // TODO: Error checking for required fields

      // Call Factory method to add newListing to db
      print(listingsFactory.add($scope.newListing));
      
    }

    $scope.addItem = function() {
       /**TODO
        * Calls listingsFactory to add new posts to the Free and For Sale page
        */
    };

    $scope.deleteItem = function(Item) {
       /**TODO
        * Calls listingsFactory to delete posts on the Free and For Sale page
        */
    };
    

    $scope.showItemDetails = function(Item) { 
      /**TODO
        * Calls listingsFactory to display post details to the Free and For Sale page
        */
    };

    

  }
]);