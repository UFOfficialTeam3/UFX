/** This file contains functions that will authenticate user login and registration */

/** Dependencies */
// connect to database 
const db = require('../config/config.js');

// test connection to database
db.query('SELECT NOW()', (err, res) => {
   console.log(err, res)
});

/*
  In this file, you should use SQL queries in order to authenticate a user's username and password.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send ... something.
 */


exports.login = function(req, res) {
    //
    //
    // db.query('SELECT * FROM users WHERE id = $1', [id]),    an example of a postgre qeury

}

exports.register = function(req, res) {
    //
    //
    //
}