'use strict';

app.controller('homeController', ['$scope', '$window', '$state', 'listingsFactory', 'authService', 'Profile',
  function($scope, $window, $state,  listingsFactory, authService, Profile) {
    var vm = this;
    
    vm.listings = [];

    vm.checkProfile = function() {
      // if there is user logged in
      if(authService.isAuthenticated()) {        
        // check if user has filled out profile
        var profile;
        Profile.getUser().
        then(function(response) {

          profile = response.data;
          console.log('User Profile: ', profile);
          //console.log(profile.email == null);
          //console.log(profile.f_name == null);
          //console.log(profile.l_name == null);

          // redirect to profile page if prfile out filled out.
          if( profile.email == null || profile.f_name == null || profile.l_name == null){
            console.log("something ain't right...")
            window.location.href = window.location.origin + "/profile";
          } else {
            console.log("Profile filled out!")
          }

        }, function(error) {
          console.log('Unable to retrieve user:', error);
        });
      }

    }   

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
          });

      vm.checkProfile();   
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
