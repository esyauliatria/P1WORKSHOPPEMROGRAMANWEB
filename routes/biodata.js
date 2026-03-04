var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('biodata',
    {
        judul : 'TABEL BIODATA'
    });
});

module.exports = router;