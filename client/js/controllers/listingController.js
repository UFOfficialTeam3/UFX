angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
       
    };
    

    $scope.showDetails = function(listing) { 
      
    };
  }
]);