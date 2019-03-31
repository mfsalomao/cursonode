var express = require('express');
var router = express.Router();

/* GET forgot-password page. */
router.get('/', function(req, res, next) {
  res.render('tables', { title: 'Express' });
});

module.exports = router;