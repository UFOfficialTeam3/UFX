'use strict';

app.controller('homeController', ['$scope', 'listingsFactory', 
  function($scope, listingsFactory) {
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
    vm.init()

    
    
    
    
    return vm;
}]);