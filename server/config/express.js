var path = require('path'),  
    express = require('express'), 
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes'),
    authRouter = require('../routes/auth.server.routes');

module.exports.init = function() {
  
  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /** Serve static files */
  app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/home/home.html'));
  });
 
  /** Mount the listingsRouter onto the /api/listings route */
  app.use('/api/listings', listingsRouter); 

  /** Mount the authenticationRouter onto the /api/authenticate */
  app.use('/api/authenticate', authRouter);

  /** Go to homepage for all routes not specified */ 
  app.use('*', express.static(path.join(__dirname, '/../../client')));
 

  return app;
};  