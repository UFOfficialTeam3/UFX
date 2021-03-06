/** All HTTP requests on the main page/ listings page should go through here */

/* Dependencies */
var listings = require('../controllers/listings.server.controller.js'),
    express = require('express'), 
    router = express.Router(),
    multer = require('multer');
    var upload = multer();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */

router.route('/')
  .get(listings.list) 
  .post(listings.createListing)
  

router.route('/email')
  .post(listings.sendEmail)


router.route('/:lid')  
  .get(listings.listingByID)
  .delete(listings.deleteListing)

router.route('/profile/:uid')
  .get(listings.listingsByUID)

module.exports = router;