// This router is for the webpages that will be displayed to screen and all of its dependencies.

/* Dependencies */
var path = require('path'),
    express = require('express'), 
    router = express.Router();

    
    
/* Home Page & Dependencies */
router.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/home/home.html'));
});
router.get('/main.css', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/home/main.css'));
});
router.get('/js/app.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/app.js'));
});
router.get('/js/controllers/listingsController.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/controllers/listingsController.js'));
});
router.get('/js/factories/listingsFactory.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/factories/listingsFactory.js'));
});


/* create-listing Page & Dependencies */
router.get('/create-listing', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/create-listing/create-listing.html'));
});
// TODO: send dependency files
//
//

/* listing-details Page & Dependencies */
router.get('/listing-details', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/listing-details/listing-details.html'));
});
// TODO: send dependency files
//
//

/* login Page & Dependencies */
router.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/login/login.html'));
});
// TODO: send dependency files
//
//

/* register Page & Dependencies */
router.get('/register', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/register/register.html'));
});
// TODO: send dependency files
//
//

module.exports = router;