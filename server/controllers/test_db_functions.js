var listings = require('../controllers/listings.server.controller.js'),
    users = require('../controllers/user.server.controller.js')
    request = require('request'),
    bodyParser = require('body-parser');

// TEST FUNCTIONS. Edit test_listing so that it works with your function.
var test_listing_ins = {
  lid: 1114,
  pid: 1,
  title: 'honda civic',
  price: 1200.12,
  category: 'cars',
  condition: 'new',
  payment: ['venmo', 'cash'],
  description: 'This fresh new civic will take you about 90mph and be loud as hell. Women will want you.',
  sell: true,
  uid: 'admin'
  
}

var test_listing_del = {
  lid: 1111
}

var test_usr_create = {
  uid :"test",
  pid: 1,
  email: "paulritaldato@gmail.com",
  username: "paul1234",
  f_name: "Paul",
  l_name: "Ritaldato",
}

const listing_ins = {
    url: 'http://localhost:8080/api/listings/',
    method: 'POST',
    body: test_listing_ins,
    json: true,
}
const listing_del = {
  url: 'http://localhost:8080/api/listings/',
  method: 'DELETE',
  body: test_listing_del,
  json: true,
}

const add_pic = {
  url: 'http://localhost:8080/api/listings/',
  method: 'POST',
  json: true,
}

request(add_pic); // check the terminal where you started ./server.js for error messages from the db.
//request(listing_del); // check the terminal where you started ./server.js for error messages from the db.

