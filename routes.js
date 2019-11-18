var express=require('express');
var fs = require('fs');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var methodOverride=require('method-override');
var LocalStrategy = require('passport-local');
var passport=require('passport');
var passportLocalMongoose =require('passport-local-mongoose');
var Schema = mongoose.Schema;
var Score = require('./models/score');
var $ = require('jquery');
var User = require('./models/user');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var config = require('./config.js');
var pm2 = require('pm2');
var expressSanitizer = require("express-sanitizer");


app.get('/freevideos', function(req,res){
        res.render('freevideos')
    }
);


UserSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("User", UserSchema);

