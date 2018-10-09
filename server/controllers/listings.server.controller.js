
/* Dependencies */
var mongoose = require('mongoose'), 
    Listing = require('../models/listings.server.model.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);


  /* Then save the listing */
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
    }
  });
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.listing);
};

/* Update a listing */
exports.update = function(req, res) { 
  var listing = req.listing;
  //console.log('id: ' + id);
  

  /** TODO **/
  /* Replace the article's properties with the new properties found in req.body */
  /* Save the article */

    Listing.findByIdAndUpdate(listing.id, {code: 'CEN3031'}, function(err, updated_listing) {
      if (err) throw err;

      // these functions do nothing!?
      updated_listing.code = 'CEN3031';

      // DEBUG
      console.log(updated_listing);
    });
  

    Listing.findById(listing.id, function(err, thingy){
      if(err) {
        res.status(400).send(err);
      };

      thingy.code = 'CEN3031';
      console.log("\nupdate() 2nd find: " + thingy + "\n");      
      res.send(thingy);
    
    });
  

};

/* Delete a listing */
exports.delete = function(req, res) { 
  var listing = req.listing;

  /** TODO **/
  /* Remove the article */

  //console.log("\nlisting being passed to delete: " + listing);

  Listing.findById(listing._id, function(err, deleted_listing) {
    if(err) {
      res.status(400).send(err);
    };

    //console.log("\ndelete() found listing in database " + deleted_listing);
    
    //delete listing
    deleted_listing.remove(function(err) {
      if (err) throw err;

      //console.log('\nlisting successfully deleted\n');

      res.send(deleted_listing);
    });
  
  });
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  /** TODO **/
  /* Your code here */

  Listing.find({}, function(err, listings) {
    if(err) {
      res.status(400).send(err);
    };
    /**    
    //sort by code alphabetically
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const codeA = a.code;
      const codeB = b.code;
    
      let comparison = 0;
      if (codeA > codeB) {
        comparison = 1;
      } else if (codeA < codeB) {
        comparison = -1;
      }
      return comparison;
    }

    // turn listings json into an array of listings
    listings_arr = [listings];

    listings.sort(compare); // Have to make the things into an array first
    
    //console.log("\nAll Listings found in db. Called by list(): " + listings_arr);

    res.json(listings);
    **/
    listings.sort(function(a, b){
      return (a.code.toLowerCase() < b.code.toLowerCase()) ? -1 : (a.code.toLowerCase() > b.code.toLowerCase()) ? 1 : 0;});
    res.json(listings);
  });
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};