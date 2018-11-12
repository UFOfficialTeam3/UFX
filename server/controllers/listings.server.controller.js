
/* Dependencies */
// connect to database (technically)
const db = require('../config/config.js');

/*
  In this file, you should use SQL queries in order to retrieve/add/remove/update Free&4Sale listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.
 */

/* Create a listing */
exports.createListing = function(req, res) {
     const listing = req.body;
     const result = db.query("INSERT INTO listing (lid, pid, title, price, category, item_condition, payment, description, sell) VALUES ($1,$2,$3,$4,$5,$6,$7, $8, $9) RETURNING *",
     [listing.lid, listing.pid, listing.Title, listing.Price, listing.category, listing.condition, listing.payment, listing.description, listing.sell], 
    (err, res) => {
      if(err)
        console.log("error from createListing in lisdting.server.controller: " + err);
    }
    
     );

};

exports.addPic= function(req, res) {
  fs.readFile('pic2.jpg', (err, imgData) => {
    // inserting data into column 'img' of type 'bytea':
    db.query('INSERT INTO pictures(pid, picture) VALUES(2 , $1)', [imgData], 
    (err,response)=> {
          if(err){
            console.log("fuuuuck");
          }
          else
            console.log("YYYAAAAAS");
        })
  });


}



/* Show the current listing */
exports.read = function(req, response) {
  /* send back the listing as json from the request */
    const result = db.query("SELECT * FROM listing", (err, res) => {
      if(err)
        console.log("error in read from listings.server.controller: " + err);
      else
        return response.json(res.rows);
    });
  
};

/* Update a listing */
exports.updateListing = function(req, res) {
    const listing = req.body;
    const result = db.query(
      "UPDATE listing SET pid=$2, Title=$3, Price=$4, type=$5, condition=$6, payment=$7, description=$8 WHERE lid=$1"
     [listing.lid, listing.pid, listing.Title, listing.Price, listing.type, listing.condition, listing.payment, listing.description],
     null, (err,res) => {
       if(err)
        console.log("error in updateListing from listings.server.controller" + err);
     }
   );
 
};

/* Delete a listing */
exports.deleteListing = function(req, res) {
  
    const result = db.query("DELETE FROM listing WHERE lid=$1",
    [req.body.lid],
    (err, res) => {
      if(err)
        console.log("error from listing.server: " + err);
      else
        console.log("worked");
    }

  );
 
};

/* Retreive all items available for sale */
exports.list = function(req, response) {
    const result = db.query("SELECT * FROM sells", null, (err, res) => {
      if(err)
        console.log("error in list from listings.server.controller: " + err);
      else
      return response.json(res.rows);
    });

  };

/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
exports.listingByID = function(req, response, next, id) {
    const listing = req.body;
    const result = db.query("SELECT * FROM listing WHERE lid=$1", [listing.lid], (err,res) => {
      if(err)
        console.log("error in listingByID from listings.server.controller: " + err);
      else
        return response.json(res.rows[0]);  
    });

};

//get all the users listings they are selling
exports.usersSellListings = function(req, response, next, id) {
  const listing = req.body;
  const result = db.query("SELECT * FROM listing WHERE uid=$1 AND sells = true", [listing.uid], (err,res) => {
    if(err)
      console.log("error in  userSEllListings from listings.server.controller: " + err);
    else 
      return response.json(res.rows);
  });

};

//get all the users listings they are selling
exports.usersBuyListings = function(req, response, next, id) {
  const listing = req.body;
  const result = db.query("SELECT * FROM listing WHERE uid=$1 AND sells = false", [listing.uid], (err,res) => {
    if(err)
      console.log("error in  userBuyListings from listings.server.controller: " + err);
    else
      return response.json(res.rows);
  });

};
/* Retrieve listings by type */
exports.listingByType = function(req, response, next, type) {

    const listing = req.body;
    const result = db.query("SELECT * FROM listing WHERE type=$1", [listing.type], (err,res) => {
      if(err)
        console.log("error in listingByType from listings.server.controller: " + err);
      else
      return response.json(res.rows);
    });
 
};
