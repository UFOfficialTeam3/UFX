'use strict';

app.controller('homeController', ['$scope', '$window', '$state', 'listingsFactory', 'mapFactory',
  function($scope, $window, $state,  listingsFactory, mapFactory) {
    var vm = this;
    console.log("Hello from home controller!")
    vm.listings = [];

    vm.init = function() {
      listingsFactory.getAll()
        .then(
          function(response) {
            vm.listings = response.data;

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
    $scope.contactSeller = function() {
      mapFactory.init();
      console.log("modal should pop up")
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
    $scope.confirmLocation = function(){

      var confirmedLocation = mapFactory.confirmLocation();
      console.log("Location gotten from map: " + confirmedLocation);

      var modal = document.getElementById('myModal');
      modal.style.display = "none";
      alert("An email has been sent to the seller with your preferred meeting place")
      listingsFactory.sendEmail(confirmedLocation);


    }

    $scope.setCatButton = function(catName){

      if($scope.catButton == catName)
        $scope.catButton = '';
      else
        $scope.catButton = catName;

    }
}]);
