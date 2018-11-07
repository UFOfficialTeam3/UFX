'use strict';

app.controller('listingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    
    /**The Controller makes functions available to be called from the html and
     * updates the view if necessary
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */

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