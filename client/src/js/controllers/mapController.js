angular.module('listings').controller('MapController', ['$scope', 'Listings', 
  function($scope, Listings) {
    
    /**The Controller makes functions available to be called from the html 
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */

    $scope.showMap = function() {
      /**TODO
       * Calls the mapController to load the map onto the screen
       */
    }

    $scope.locationConfirm = function() {
      /**TODO
       * Calls the mapController to display approved meeting location
       */
    }

  }
]);