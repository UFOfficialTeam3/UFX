
/* Dependencies */
// connect to database (technically)
const db = require('../config/config.js');
const fs = require('fs');
/*
  In this file, you should use SQL queries in order to retrieve/add/remove/update Free&4Sale listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.
 */


/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */

/** Gets a user by id */
exports.userByID = function(req, response) {

      const userID = req.query.id;

      db.query('SELECT * FROM users WHERE uid = $1', [userID], (err, res) => {
        if (err) {
          res.status(404)        // HTTP status 404: Not Found
          .send('Not found');
          console.log('Error while trying to read a user by ID');
          throw err;
        }
        else{
          console.log(res.rows[0]);
          return response.json(res.rows[0]);
        }
      })
};

/** Updates user info */
exports.update = function(req, response) {
      const userID = req.body.userID;
      const f_name = 'Rick';

      db.query('UPDATE users SET f_name=$2 WHERE uid=$1 RETURNING *', [userID, f_name],
      (err, res) => {
        if (err) {
          res.status(404)        // HTTP status 404: Not Found
          .send('Not found');
          console.log('Error while trying to update user');
          throw err;
        }
        console.log('this is what server controller is returning: ' + res.rows[0]);
        return response.json(res.rows[0]);
      })
};

exports.addPic= function(req, response) {
  fs.readFile('C:\\Users\\paul\\Pictures\\pic2.jpg', (err, imgData) => {
    // inserting data into column 'img' of type 'bytea':
    db.query('INSERT INTO pictures(pid, picture) VALUES(2 , $1)', [imgData],
    (err,res)=> {
          if(err){
            console.log("fuuuuck");
          }
          console.log("YYYAAAAAS");
        })
  });
}

//create a user
exports.createUser = function(req, response) {
  const userID = req.body.id;
  //console.log("req.body:",req.body.id); //DEBUG

  db.query('INSERT INTO users (uid) VALUES($1)', [userID],
    (err, res) => {
      if (err) {
        res.status(404)        // HTTP status 404: Not Found
        .send('Not found');
        console.log('Error while trying to create user');
        throw err;
      }
      console.log('this is what server controller is returning: ' + res.rows[0]);
      //res.send('User', userID, 'added to database'); // untested
      return response.json(res.rows[0]);
    })
};
