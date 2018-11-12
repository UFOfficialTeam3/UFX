var listings = require('../controllers/listings.server.controller.js'),
    request = require('request'),
    bodyParser = require('body-parser');

// TEST FUNCTIONS. Edit test_listing so that it works with your function.
var test_listing_ins = {
  lid: 1111,
  pid: 1,
  Title: 'honda civic',
  Price: 1200.12,
  category: 'cars',
  condition: 'new',
  payment: ['venmo', 'cash'],
  description: 'This fresh new civic will take you about 90mph and be loud as hell. Women will want you.',
  sell: true,
  uid: 1
  
}

var test_listing_del = {
  lid: 1111
}

var test_usr_create = {
  uid :1234,
  pid: 1,
  email: "paulritaldato@gmail.com",
  username: "paul1234",
  f_name: "Paul",
  l_name: "Ritaldato",
}

const listing_ins = {
    url: 'http://localhost:8080/api/listings/create-listing',
    method: 'POST',
    body: test_listing_ins,
    json: true,
}
const listing_del = {
  url: 'http://localhost:8080/api/listings/create-listing',
  method: 'POST',
  body: test_listing_del,
  json: true,
}
const usr_create = {
  url: 'http://localhost:8080/api/listings/create-listing',
  method: 'POST',
  body: test_usr_create,
  json: true,
}

request(listing_ins); // check the terminal where you started ./server.js for error messages from the db.
request(listing_del); // check the terminal where you started ./server.js for error messages from the db.
//request(usr_create); // check the terminal where you started ./server.js for error messages from the db.

