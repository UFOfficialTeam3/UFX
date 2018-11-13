/** All HTTP requests on the main page/ listings page should go through here */

/* Dependencies */
var listings = require('../controllers/listings.server.controller.js'),
    express = require('express'), 
    fileUpload = require('express-fileupload'),
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.use(fileUpload());

router.route('/')
  .get(listings.list) 
  .post(listings.createListing)
  .delete(listings.deleteListing)

router.route('/pic')
  .post(listings.addPic)


module.exports = router;