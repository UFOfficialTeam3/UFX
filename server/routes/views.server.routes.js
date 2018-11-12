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
router.get('/js/homeController.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/controllers/homeController.js'));
});



/* create-listing Page & Dependencies */
router.get('/create-listing', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/create-listing/create-listing.html'));
});
router.get('/js/createListingsController.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/controllers/createListingsController.js'))
});
router.get('/js/listingsFactory.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/factories/listingsFactory.js'))
});


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
router.get('/login.css', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/login/login.css'))
});
router.get('/js/authController.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/controllers/authController.js'))
});
router.get('/js/authFactory.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/factories/authFactory.js'))
});
router.get('/node_modules/angular-auth0/dist/angular-auth0.js', function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../../node_modules/angular-auth0/dist/angular-auth0.js'))
});

/* register Page & Dependencies */
router.get('/register', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/register/register.html'));
});

/* Profile page */
router.get('/profile', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/profile/profile.html'));
});
router.get('../home/main.css', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/home/main.css'));
});
router.get('/profile.css', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/components/profile/profile.css'));
});

router.get('/js/controllers/profileController.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/controllers/profileController.js'));
});
router.get('/js/factories/profileFactory.js', function(req, res){
    res.sendFile(path.resolve(__dirname+'/../../client/src/js/factories/profileFactory.js'));
});




// TODO: send dependency files
//
//

module.exports = router;