var express = require("express");
var router = express.Router()

router.get('/users/new', function(req,res){
    res.render('register');
});
module.exports = router