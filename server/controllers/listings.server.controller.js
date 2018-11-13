
/* Dependencies */
// connect to database (technically)
const db = require('../config/config.js'),
  fs = require('fs');
/*
  In this file, you should use SQL queries in order to retrieve/add/remove/update Free&4Sale listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.
 */

/* Create a listing */
exports.createListing = function(req, response) {
     const listing = req.body;

     fs.readFile('/mnt/c/Users/paul/Pictures/pic2.jpg', (err, imgData) => {
       console.log(err);
       //console.log(imgData.toString('hex'));
      });

     const result = db.query("INSERT INTO listing(title, price, category, item_condition, description, sell, payment, uid, picture) VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9)",
     [listing.title, listing.price, listing.category, listing.condition, listing.description, listing.sell, listing.payment, listing.uid,null], 
    (err, res) => {
      if (err) {
      
        // res.status(404)        // HTTP status 404: Not Found
        // .send('Not found');
         console.log("error from createListing in listing.server.controller: " + err);
        // throw err;
      }
    })

};

/* Upload a Picture */
exports.addPic= function(req, response) {
  fs.readFile('/mnt/c/Users/paul/Pictures/pic2.jpg', (err, imgData) => {
    console.log(imgData);
    console.log(err);

    // inserting data into column 'img' of type 'bytea':
    db.query('INSERT INTO pictures(picture) VALUES($1)', [imgData], 
    (err,response)=> {
          if(err){
            console.log("fuuuuck" + err);
          }
          else {
            console.log("YYYAAAAAS");
          }
        })
  });
};



/* Show the current listing */
exports.read = function(req, response) {
  /* send back the listing as json from the request */
    const result = db.query("SELECT * FROM listing", (err, res) => {
      if (err) {
        res.status(404)        // HTTP status 404: Not Found
        .send('Not found');
        console.log("error in read from listings.server.controller: " + err);
        throw err;
      }
      else{
        console.log(res.rows);
        return response.json(res.rows);
      }
    });
};

/* Update a listing */
exports.updateListing = function(req, response) {
    const listing = req.body;
    const result = db.query("UPDATE listing SET Title=$2, Price=$3, type=$4, condition=$5, payment=$6, description=$7 WHERE lid=$1"
     [listing.lid, listing.Title, listing.Price, listing.type, listing.condition, listing.payment, listing.description],
     null, (err,res) => {
       if (err) {
         res.status(404)        // HTTP status 404: Not Found
         .send('Not found');
         console.log("error in updateListing from listings.server.controller" + err);
         throw err;
       }
      });
};

/* Delete a listing */
exports.deleteListing = function(req, response) {
    const result = db.query("DELETE FROM listing WHERE lid=$1",
    [req.body.lid],
    (err, res) => {
      if (err) {
        res.status(404)        // HTTP status 404: Not Found
        .send('Not found');
        console.log("error from listing.server: " + err);
        throw err;
      }
    });
};

/* Retreive all items available for sale */
exports.list = function(req, response) {
    const result = db.query("SELECT * FROM listing", null, (err, res) => {
      if (err) {
        res.status(404)        // HTTP status 404: Not Found
        .send('Not found');
        console.log("error in list from listings.server.controller: " + err);
        throw err;
      }
      else{
        console.log(res.rows);
        return response.json(res.rows);
      }
    });
  };

/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
exports.listingByID = function(req, response) {
    const listing = req.body;
    const result = db.query("SELECT * FROM listing WHERE lid=$1", [listing.lid], (err,res) => {
      if (err) {
        res.status(404)        // HTTP status 404: Not Found
        .send('Not found');
        console.log("error in listingByID from listings.server.controller: " + err);
        throw err;
      }
      else{
        console.log(res.rows[0]);
        return response.json(res.rows[0]);
      }
    });
};

/* Show all the users listings that are marked as selling */
exports.usersSellListings = function(req, response) {
  const listing = req.body;
  const result = db.query("SELECT * FROM listing WHERE uid=$1 AND sells = true", [listing.uid], (err,res) => {
    if (err) {
      res.status(404)        // HTTP status 404: Not Found
      .send('Not found');
      console.log("error in  userSEllListings from listings.server.controller: " + err);
      throw err;
    }
    else{
      console.log(res.rows);
      return response.json(res.rows);
    }
  });
};

/* Show all the users listings that are marked as buying */
exports.usersBuyListings = function(req, response) {
  const listing = req.body;
  const result = db.query("SELECT * FROM listing WHERE uid=$1 AND sells = false", [listing.uid], (err,res) => {
    if (err) {
      res.status(404)        // HTTP status 404: Not Found
      .send('Not found');
      console.log("error in  userBuyListings from listings.server.controller: " + err);
      throw err;
    }
    else{
      console.log(res.rows);
      return response.json(res.rows);
    }
  });
};

/* Retrieve listings by type */
exports.listingByType = function(req, response) {
    const listing = req.body;
    const result = db.query("SELECT * FROM listing WHERE type=$1", [listing.type], (err,res) => {
      if (err) {
        res.status(404)        // HTTP status 404: Not Found
        .send('Not found');
        console.log("error in listingByType from listings.server.controller: " + err);
        throw err;
      }
      else{
        console.log(res.rows);
        return response.json(res.rows);
      }
    });
};

exports.sendEmail = function(request, response){
  var nodemailer = require('nodemailer');
      
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'papa0398@gmail.com',
          pass: 'gmailkingdom'
        }
      });

      var mailOptions = {
        from: 'papa0398@gmail.com',
        to: 'papa0398@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          response.end;
        }
      });
}
