/** All HTTP requests on the main page/ listings page should go through here */

/* Dependencies */
var user = require('../controllers/user.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */

 
router.route('/')
  .get(user.userByID)
  .post(user.createUser)
  .put(user.update);


module.exports = router;