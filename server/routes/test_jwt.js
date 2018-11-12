// set dependencies
const express = require('express');
//const app = express();
const jwt = require('express-jwt');             // include these in other routes.js
const jwksRsa = require('jwks-rsa');            // include these in other routes.js
const jwtAuthz = require('express-jwt-authz');  // include these in other routes.js
const bodyParser = require('body-parser');
const request = require('request');
const router = express.Router();

// enable the use of request body parsing middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

// Create middleware for checking the JWT
const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://ufx.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'https://ufx.com/api',
    issuer: `https://ufx.auth0.com/`,
    algorithms: ['RS256']
});



/** 
// create timesheets upload API endpoint
app.post('/timesheets/upload', function(req, res){
  res.status(201).send({message: "This is the POST /timesheets/upload endpoint"});
})
*/
/** 
// create timesheets API endpoint
app.post('/timesheets/upload', checkJwt, function(req, res){
    var timesheet = req.body;
  
    // Save the timesheet entry to the database...
    console.log("post endpoint v2: " + timesheet);
  
    //send the response
    res.status(201).send(timesheet);
})
*/

// Batch upload endpoint. http://localhost:8080/api/testjwt
router.route('/')
    .post( checkJwt, jwtAuthz(['crud:db']), function(req, res){
        res.status(201).send({message: "This is the POST testjwt endpoint"});
    });

module.exports = router;

/** 
// launch the API Server at localhost:8080
app.listen(8080);
console.log("test_jwt litening on 8080.");

 
// make post request
request.post({url: 'http://localhost:8080/timesheets/upload'}, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body', body);
})
*/


