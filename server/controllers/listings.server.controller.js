
/* Dependencies */
// connect to database (technically)
const db = require('../config/config.js');

/*
  In this file, you should use SQL queries in order to retrieve/add/remove/update Free&4Sale listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.
 */

/* Create a listing */
exports.create = function(req, res) {

};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.listing);
};

/* Update a listing */
exports.update = function(req, res) { 
  var listing = req.listing;
   
};

/* Delete a listing */
exports.delete = function(req, res) { 
  
};

/* Retreive all items available for sale */
exports.list = function(req, res) {
  
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  
};