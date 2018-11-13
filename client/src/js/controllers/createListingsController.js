'use strict';

app.controller('createListingsController', ['$scope', 'listingsFactory', 
  function($scope, listingsFactory) {
    var vm = this;

    vm.newListing = {
      title: null,
      price: null,
      negotiable: null, // This field not in table.
      sell: null, //TODO: change html code for this
      category: null, //TODO: replace type with category
      condition: null,
      payment: ['false', 'false', 'false'],  // This field not in table.
      description: null, // This field not in table.
      uid: null,
      photo: null,
    }
 
    vm.createListing = function() {

      //console.log("file?", $scope.file);

      // var photo = document.getElementById('file_upload').files[0];
      // console.log(photo);
      // vm.newListing.photo = photo;
      var user = JSON.parse(localStorage.getItem('user'));

    }

    vm.createListing = function() {
      console.log(vm.newListing);

      // TODO: Error checking for required fields

      // Call Factory method to add newListing to db
      //console.log(listingsFactory.add(vm.newListing));
      
    }

    vm.addItem = function() {
       /**TODO
        * Calls listingsFactory to add new posts to the Free and For Sale page
        */
    };

    vm.deleteItem = function(Item) {
       /**TODO
        * Calls listingsFactory to delete posts on the Free and For Sale page
        */
    };
    

    vm.showItemDetails = function(Item) { 
      /**TODO
        * Calls listingsFactory to display post details to the Free and For Sale page
        */
    };

    
    return vm;

  }
]);