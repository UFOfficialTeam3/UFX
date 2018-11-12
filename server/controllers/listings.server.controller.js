
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
   try {
     const listing = req.body;
     const result = db.query("INSERT INTO listing (lid, pid, title, price, category, item_condition, payment, description, sell) VALUES ($1,$2,$3,$4,$5,$6,$7, $8, $9) RETURNING *",
     [listing.lid, listing.pid, listing.Title, listing.Price, listing.category, listing.condition, listing.payment, listing.description, listing.sell]
    );
    return res.json(result.rows[0]);
    } catch (err) {
      res.status(107)        // HTTP status 404: Not Found
        .send('Error with create');
      console.log('Error while trying to create a listing', err);
      return (err);
    }
};

//create a user
exports.createUser = function(req, res) {
  try {
    const listing = req.body;
    const result = db.query("INSERT INTO listing (lid, pid, title, price, category, item_condition, payment, description, sell) VALUES ($1,$2,$3,$4,$5,$6,$7, $8, $9) RETURNING *",
    [listing.lid, listing.pid, listing.Title, listing.Price, listing.category, listing.condition, listing.payment, listing.description, listing.sell]
   );
   return res.json(result.rows[0]);
   } catch (err) {
     res.status(107)        // HTTP status 404: Not Found
       .send('Error with create');
     console.log('Error while trying to create a listing', err);
     return (err);
   }
};



/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  try {
    const result = db.query("SELECT * FROM listing");
    return res.json(result.rows);
  } catch (err) {
    res.status(404)        // HTTP status 404: Not Found
    .send('Not found');
    console.log('Error while trying to read all listings');
    return next(err);
  }
};

/* Update a listing */
exports.updateListing = function(req, res) {
  try {
    const listing = req.body;
    const result = db.query(
      "UPDATE listing SET pid=$2, Title=$3, Price=$4, type=$5, condition=$6, payment=$7, description=$8 WHERE lid=$1 RETURNING *"
     [listing.lid, listing.pid, listing.Title, listing.Price, listing.type, listing.condition, listing.payment, listing.description]
   );
   return res.json(result.rows[0]);
   } catch (err) {
     res.status(404)        // HTTP status 404: Not Found
       .send('Not found');
     console.log('Error while trying to update a listing');
     return next(err);
   }
};

/* Delete a listing */
exports.deleteListing = function(req, res) {
  try {
    const result = db.query("DELETE FROM listing WHERE lid=$1",
    [req.body.lid]
  );
    return res.json({ message: "Deleted" });
  } catch (err) {
    res.status(404)        // HTTP status 404: Not Found
      .send('Not found');
    console.log('Error while trying to delete a listing');
    return next(err);
  }
};

/* Retreive all items available for sale */
exports.list = function(req, res) {
  try {
    const result = db.query("SELECT * FROM sells");
    return res.json(result.rows);
  } catch (err) {
    res.status(404)        // HTTP status 404: Not Found
      .send('Not found');
    console.log('Error while trying to read all sells');
    return next(err);
  }
};

/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  try {
    const listing = req.body;
    const result = db.query("SELECT * FROM listing WHERE lid=$1", [listing.lid]);
    return res.json(result.rows);
  } catch (err) {
    res.status(404)        // HTTP status 404: Not Found
      .send('Not found');
    console.log('Error while trying to read a listing by ID');
    return next(err);
  }
};

/* Retrieve listings by type */
exports.listingByType = function(req, res, next, type) {
  try {
    const listing = req.body;
    const result = db.query("SELECT * FROM listing WHERE type=$1", [listing.type]);
    return res.json(result.rows);
  } catch (err) {
    res.status(404)        // HTTP status 404: Not Found
      .send('Not found');
    console.log('Error while trying to update a listing by type');
    return next(err);
  }
};
