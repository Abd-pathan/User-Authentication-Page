var express = require('express');
var router = express.Router();
/*
var loggedin = function(req,res,next){
  if(req.isAuthenticated()){next()}
  else {res.redirect('/login');}
};
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});



router.get('/signup', function(req, res, next) {
  res.render('signup');
});

/*
router.get('/profile', function(req, res, next) {
  res.send(req.session);
});
*/

router.get('/profile', function(req, res, next) {
  res.render('profile');
});




module.exports = router;
