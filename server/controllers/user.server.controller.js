
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
      console.log(userID);
      db.query('SELECT * FROM users WHERE uid = $1', [userID], (err, res) => {
        if (err) {
          response.status(404)        // HTTP status 404: Not Found
          .send('Not found');
          console.log('Error while trying to read a user by ID');
          throw err;
        }
        else{
          return response.json(res.rows[0]);
        }
      })
};

/** Updates user info */
exports.update = function(req, response) {
      var user =  req.body.user;
      console.log("user: " + user)
      user = JSON.parse(user);
      

      const uid = user.uid;
      const email = user.email;
      const f_name = user.fname;
      const l_name = user.lname;
      const photo = req.files.photo.data.toString('base64')

      if (Object.keys(req.files).length == 0) {
        return response.status(400).send('No files were uploaded.');
      } else {
        //console.log("req.files", req.files);
        //console.log("req.files.file.data", req.files.file.data.toString('base64'));
      }

      

      db.query('UPDATE users SET email=$2, f_name=$3, l_name=$4, picture=$5 WHERE uid=$1 RETURNING *', [uid, email, f_name, l_name, photo],
      (err, res) => {
        if (err) {
          return err;
        }
        return response.json(res.rows[0]);
      })
};


//create a user
exports.createUser = function(req, response) {
  const userID = req.body.id;
  //console.log("req.body:",req.body.id); //DEBUG

  db.query('INSERT INTO users (uid) VALUES($1)', [userID],
    (err, res) => {
      if (err) {
        response.status(404)        // HTTP status 404: Not Found
        .send('Not found');
        console.log('Error while trying to create user');
        throw err;
      }
      else {
        //res.send('User', userID, 'added to database'); // untested
        return response.json(res.rows[0]);
      }
    })
};
