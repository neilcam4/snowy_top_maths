var express = require("express");
var router = express.Router()

router.get('/users/new', function(req,res){
    res.render('register');
});


router.get('/freevideos', function(req,res){
    res.render('freevideos')
}
);

module.exports = router