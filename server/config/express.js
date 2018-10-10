var path = require('path'),  
    express = require('express'), 
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes'),
    authRouter = require('../routes/auth.server.routes');

module.exports.init = function() {
  // May or may not need to connect to the database here...

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /** Serve static files */
  app.use('/', express.static(path.join(__dirname, '/../../client')));
 
  /** Mount the listingsRouter onto the /api/listings route */
  app.use('/api/listings', listingsRouter); 

  /** Mount the authenticationRouter onto the /api/authenticate */
  app.use('/api/authenticate', authRouter);

  /** Go to homepage for all routes not specified */ 
  app.use('*', express.static(path.join(__dirname, '/../../client')));
 

  return app;
};  