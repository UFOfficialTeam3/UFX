'use strict';

app.controller('homeController', ['$scope', '$window', '$state', 'listingsFactory',
  function($scope, $window, $state,  listingsFactory) {
    var vm = this;
    
    vm.listings = [];

    

    vm.init = function() {
      $scope.loading=true;
      
      listingsFactory.getAll()
        .then(
          function(response) {
            vm.listings = response.data;
            $scope.loading=false

          }, function(error) {
            // if there was an error with the http request
            console.log("getAll error", error);
          })
    }

    // initialize controller and home page
    vm.init();

    vm.showDetails = function (listing) {
      var lid = listing.lid;
      console.log("showDetails", lid);

      listingsFactory.setLid(lid);

      // redirect to listing-details page and carry the listing id in url
      $window.location.href = '/listing-details/?lid=' + lid;
    };

    //Called when the user contacts the seller for a listing
    

    

    $scope.setCatButton = function(catName){

      if($scope.catButton == catName)
        $scope.catButton = '';
      else
        $scope.catButton = catName;

    }
}]);
