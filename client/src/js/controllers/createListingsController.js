'use strict';

app.controller('createListingsController', ['$scope', 'listingsFactory', 
  function($scope, listingsFactory) {
    var vm = this;

    vm.newListing = {
      lid: 70,     // How should users go about inputting a listing id??
      pid: 101,
      Title: 'Honda Civic',
      Price: 200,
      negotiable: true, // This field not in table.
      sell: true, //TODO: change html code for this
      category: 'cars', //TODO: replace type with category
      condition: 'new',
      payment: 'cash', // This field will be changed.
      pt_money: undefined,  // This field not in table.
      pt_venmo: undefined,  // This field not in table.
      pt_paypal: undefined,  // This field not in table.
      description: 'description',
      location: 'The Hub', // This field not in table.
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