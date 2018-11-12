
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
exports.userByID = function(request, response) {
    
      const userID = request.query.id;

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
exports.update = function(request, response) {
      const userID = request.body.userID;
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

exports.addPic= function(req, res) {
  fs.readFile('C:\\Users\\paul\\Pictures\\pic2.jpg', (err, imgData) => {
    // inserting data into column 'img' of type 'bytea':
    db.query('INSERT INTO pictures(pid, picture) VALUES(2 , $1)', [imgData], 
    (err,response)=> {
          if(err){
            console.log("fuuuuck");
          }
          console.log("YYYAAAAAS");
        })
  });


}
//create a user
exports.createUser = function(req, res) {
  try {
    const user = req.body;

    /* This if statement MUST happen before the query. Need to figure out how.*/

    // if(user.pic != null){
      
    //   addPic();
    // }

    const result = db.query("INSERT INTO users (uid, pid, email, username, f_name, l_name) VALUES ($1,$2,$3,$4,$5,$6,$7, $8, $9) RETURNING *",
    [user.uid, user.pid, user.email, user.username, user.f_name, user.l_name]
   );
   return res.json(result.rows[0]);
   } catch (err) {
     res.status(107)        // HTTP status 404: Not Found
       .send('Error with create');
     console.log('Error while trying to create a user', err);
     return (err);
   }
};