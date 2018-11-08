/** All HTTP requests on the main page/ listings page should go through here */

/* Dependencies */
//var listings = require('../controllers/listings.server.controller.js'), UNCOMMENT LATER
  var  express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  //.get(listings.list) UNCOMMENT LATTTERERRERERER
  //.post(listings.create);

router.route('/create-listing')
  //.post(listings.create)


module.exports = router;