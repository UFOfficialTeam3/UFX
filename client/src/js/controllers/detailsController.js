
app.controller('detailsController', ['$scope', '$window', 'listingsFactory', 
function($scope, $window, listingsFactory) {
    var vm =  this;
    
    vm.listing = {};

    vm.init = function() {
        // get lid of listing
        const url = new URL($window.location.href);
        const lid = url.searchParams.get("lid");

        // fetch listing by lid 
        listingsFactory.findByID(lid)
        .then(
          function(response) {
            // if http request called successfully
            //console.log("findByID response", response);
            vm.listing = response.data;
            console.log(vm.listing);
            

          }, function(error) {
            // if there was an error with the http request
            console.log("findByID error", error);
        })
    }

    vm.init();
    

    
    


    return vm;
}]);