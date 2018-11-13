var path = require('path'),  
    express = require('express'), 
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    viewsRouter = require('../routes/views.server.routes'),
    listingsRouter = require('../routes/listings.server.routes'),
    authRouter = require('../routes/auth.server.routes'),
    jwtRouter = require('../routes/test_jwt'),
    userRouter = require('../routes/user.server.routes'),
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' });

module.exports.init = function() {
  
  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /** Serve static files */
  app.use(viewsRouter);
 
  /** Mount the listingsRouter onto the /api/listings route */
  app.use('/api/listings', listingsRouter); 
  

  /** Mount the authenticationRouter onto the /api/authenticate */
  app.use('/api/authenticate', authRouter);

  // For testing jwt
  app.use('/api/testjwt', jwtRouter);
  
  /** Mount the userRouter onto the /api/user */
  app.use('/api/user', userRouter);

  /** Go to homepage for all routes not specified */ 
  // just make a get request to homepage, so we are redirected to homepage.
 

  return app;
};  