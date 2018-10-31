
/* Dependencies */
// connect to database (technically)
const db = require('../config/config.js');

db.connect();
/*
  In this file, you should use SQL queries in order to retrieve/add/remove/update Free&4Sale listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.
 */

/* Create a listing */
exports.create = function(req, res) {
   try {
     const result = await db.query("INSERT INTO Listings (lid, pid, Title, Price, type, condition, payment, description) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
     [req.body.lid, req.body.pid, req.body.Title, req.body.Price, req.body.type, req.body.condition, req.body.payment, req.body.description]
    );
    return res.json(result.rows[0]);
    } catch (err) {
      return next(err);
    }
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  try {
    const result = await db.query("SELECT * FROM Listings");
    return res.json(results.rows);
  } catch (err)
    return next(err);
  }
};

/* Update a listing */
exports.update = function(req, res) {
  try {
    const result = await db.query(
      "UPDATE Listings SET pid=$2, Title=$3, Price=$4, type=$5, condition=$6, payment=$7, description=$8 WHERE lid=$1 RETURNING *"
     [req.body.lid, req.body.pid, req.body.Title, req.body.Price, req.body.type, req.body.condition, req.body.payment, req.body.description]
   );
   return res.json(result.rows[0]);
   } catch (err) {
     return next(err);
   }
};

/* Delete a listing */
exports.delete = function(req, res) {
  try {
    const result = await db.query("DELETE FROM Listings WHERE lid=$1",
    [req.body.lid]
  );
    return res.json({ message: "Deleted" });
  } catch (err) {
    return next(err);
  }
};

/* Retreive all items available for sale */
exports.list = function(req, res) {
  try {
    const result = await db.query("SELECT * FROM Sells");
    return res.json(results.rows);
  } catch (err)
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
    const result = await db.query("SELECT FROM Listings WHERE lid=$1", [req.body.lid]);
    return res.json(results.rows);
  } catch (err)
    return next(err);
  }
};
