angular.module('listings').controller('mapController', ['$scope', 'Listings', 
  function($scope, Listings) {
    
    /**The Controller makes functions available to be called from the html and
     * updates the view after changes are made to it
     * Add functions that will be used by the website to make calls to the appropriate Factories
    */

    $scope.showMap = function() {
      /**TODO
       * Calls the mapFactory to load the map onto the screen
       */
    }

    $scope.locationConfirm = function(locationObject) {
      /**TODO
       * Calls the mapController to display approved meeting location
       */
    }

  }
]);