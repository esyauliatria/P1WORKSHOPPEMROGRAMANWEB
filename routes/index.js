var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'prabowo',
      wapres: 'gibran'
     });
});


router.get('/informasi', function(req, res, next){
  res.render('informasi',
    {
    judul : 'halaman informasi'
  });
});


module.exports = router;
