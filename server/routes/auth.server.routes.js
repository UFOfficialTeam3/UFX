/** All HTTP requests on the login page should go through here */

// nameofwebsite.com/login 
// the angular code for this page can make a post request to 
// nameofwebsite.com/api/authenticate/login
// nameofwebsite.com/api/authenticate/register

/* Dependencies */
var user = require('../controllers/auth.server.controller.js'), // request handlers code
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/login')
  .post(user.login) 

router.route('/register')
  .post(user.register)                        
  


/*
  The ':' specifies a URL parameter. 
 */
router.route('/:listingId')
  .get(listings.read)
  .put(listings.update)
  .delete(listings.delete);


router.param('listingId', listings.listingByID);

module.exports = router;