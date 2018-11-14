'use strict';

app.controller('homeController', ['$scope', '$window', '$state', 'listingsFactory',  
  function($scope, $window, $state,  listingsFactory) {
    var vm = this;

    console.log("Hello from home controller!")
    vm.listings = {};

    vm.init = function() {
      listingsFactory.getAll()
        .then(
          function(response) {
            // if http request called successfully
            //console.log("getAll response", response);
            vm.listings = response.data;
            console.log(vm.listings);
            

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

    
    
    
    
    return vm;
}]);