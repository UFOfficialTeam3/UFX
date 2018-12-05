
app.controller('detailsController', ['$scope', '$window', 'listingsFactory', 'mapFactory','Profile', 
function($scope, $window, listingsFactory, mapFactory, Profile) {
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

    $scope.contactSeller = function() {
        console.log("modal should pop up")
        mapFactory.init();
        
        var modal = document.getElementById('myModal');
  
        // When the user clicks on the button, open the modal
  
        modal.style.display = "block";
  
        // When the user clicks on <span> (x), close the modal
        /*
        span.onclick = function() {
            modal.style.display = "none";
        }
  */
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
      }
    

    //Called after the user confirms location for meet up and will email seller
    $scope.confirmLocation = function(listingsuserEmail){
        var confirmedLocation = mapFactory.confirmLocation();
         if(confirmedLocation == 'Nope'){
             alert('You must choose a preferred location to meet')
             return     //If they didnt pick a location
         }
        
        
  
        //Modal Stuff
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
        
  
        Profile.getUser().then(function(response) {
          var currentUser = response.data;
          var currentuserInfo = {f_name: currentUser.f_name, l_name: currentUser.l_name, email: currentUser.email}
          alert("An email has been sent to the seller with your preferred meeting place")

          

          listingsFactory.sendEmail(confirmedLocation, currentuserInfo, listingsuserEmail);
  
        }, function(error) {
          // if there was an error with the http request
          console.log("Error from homeController: ", error);
        })
        
  
  
    }
    


    return vm;
}]);