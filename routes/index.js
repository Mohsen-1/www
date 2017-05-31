var express = require('express');
var router = express.Router();

/* GET homepage */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET countdown */
router.get('/countdown', function(req, res, next) {
  res.render('countdown.html');
});

module.exports = router;
