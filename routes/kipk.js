var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('kipk',
    {
        judul : 'kartu indonesia pintarr kuliah'
    });
});

module.exports = router;