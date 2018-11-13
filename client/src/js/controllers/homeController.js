angular.module('app').controller('homeController', ['$scope', 'listingsFactory', 'mapFactory', 
  function($scope, listingsFactory, mapFactory) {
    

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

    $scope.purchase = function() {
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

    $scope.confirmLocation = function(){

      listingsFactory.purchase()

      
    }
}]);