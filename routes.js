var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passportLocalMongoose =require('passport-local-mongoose');

router.get('/freevideos', function(req,res){
        res.render('freevideos')
    }
);


module.exports = router

