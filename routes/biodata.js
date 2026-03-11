var express = require('express');
const connection = require('../config/database');
var router = express.Router();

router.get('/', function(req, res, next) {
    connection.query('select * from biodata order by id_biodata desc', function(err,rows){
        if(err){
            req.flash('error', err);
        }else{
            res.render('biodata',{
                judul : 'Halaman Biodata',
                data: rows
            });
        }
    });
});

module.exports = router;