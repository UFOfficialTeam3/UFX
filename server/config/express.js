var path = require('path'),  
    express = require('express'), 
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  /** TODO: Connect to PostgreSQL */
  // connect to database
  // ...
  // ... 

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /** Serve static files */
  app.use('/', express.static(path.join(__dirname, '/../../client')));
 
  /** Mount the listingsRouter onto the /api/listings route */
  app.use('/api/listings', listingsRouter); // in the test file it says GET /api/listings
  

  /** Go to homepage for all routes not specified */ 
  app.use('*', express.static(path.join(__dirname, '/../../client')));
 

  return app;
};  