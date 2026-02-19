var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('mbg/index',
    {
        judul : 'makan bergizi gratis'
    });
});

module.exports = router;