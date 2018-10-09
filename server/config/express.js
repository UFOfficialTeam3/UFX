var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, {useMongoClient: true});

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use('/', express.static(path.join(__dirname, '/../../client')));
 
  /**TODO 
  Use the listings router for requests to the api */
  // mount the listingsRouter onto the /api/listings route
  app.use('/api/listings', listingsRouter); // in the test file it says GET /api/listings
  

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.use('*', express.static(path.join(__dirname, '/../../client')));
 

  return app;
};  