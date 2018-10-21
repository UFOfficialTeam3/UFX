/** All HTTP requests on the login page should go through here */

// The nameofwebsite.com/login webpage will contain code that makes requests to:
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
  


module.exports = router;