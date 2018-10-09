angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
            
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      /**TODO 
      *Save the article using the Listings factory. If the object is successfully 
      saved redirect back to the list page. Otherwise, display the error
      */
      //ng-model = $scope.newListing .code .name .address
      Listings.create($scope.newListing).then(function (response) { // I don't know how to redirect page back to landing
        console.log(response);
        
        // refresh model. not working rn...
        Listings.getAll().then(function(response) {
          $scope.listings = response.data;
        
        }, function (error) { // display error if error
          console.log('Unable to add listing: ', error);
        });
      });  
    };

    $scope.deleteListing = function(listing) { // changed parameter to listing from index due to bug
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		    navigate back to 'listing.list'. Otherwise, display the error. 
       */
      console.log(listing._id);
      
      
      Listings.delete(listing._id).then(function(response) {
        console.log(response); // expected output: res.body should contain the deleted listing

      // refresh model. 
      Listings.getAll().then(function(response) {
        $scope.listings = response.data;
        $scope.detailedInfo = undefined;
      
      }, function (error) { // display error if error
        console.log('Unable to delete listing: ', error);
      });

      });
    };

    $scope.showDetails = function(listing) { //changed param from index to listing. Otherwise showDetails wouldn't display correctly after using the search bar
      $scope.detailedInfo = listing;
      console.log("clicked to show details");
    };
  }
]);