
app.controller('detailsController', ['$scope', '$window', 'listingsFactory', 
function($scope, $window, listingsFactory) {
    var vm =  this;
    
    vm.listing = {};
    vm.user = {};

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
            vm.listing = response.data[0];
            vm.user = response.data[1];

            /*Parses payment array because apparently every element of it is part of the array 
            even the {}*/
            var paymentString = JSON.stringify(vm.listing.payment);
            paymentString = paymentString.replace("{", '');
            paymentString = paymentString.replace("}", '');
            paymentString = paymentString.replace("\"", '');
            paymentString = paymentString.replace("\"", '');
            
            $scope.payment = paymentString;
            console.log("This is vm.listing.payment: ", $scope.payment);
            

          }, function(error) {
            // if there was an error with the http request
            console.log("findByID error", error);
        })
    }

    vm.init();
    

    
    


    return vm;
}]);