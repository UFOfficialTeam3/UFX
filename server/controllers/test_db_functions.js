var listings = require('../controllers/listings.server.controller.js'),
    request = require('request'),
    bodyParser = require('body-parser');

// TEST FUNCTIONS. Edit test_listing so that it works with your function.
var test_listing = {
  lid: undefined,
  Title: undefined,
  Price: undefined,
  category: undefined,
  condition: undefined,
  payment: undefined,
  description: undefined,
  sell: undefined,
  
}

const options = {
    url: 'http://localhost:8080/api/listings/create-listing',
    method: 'POST',
    body: test_listing,
    json: true,
}

request(options); // check the terminal where you started ./server.js for error messages from the db.

