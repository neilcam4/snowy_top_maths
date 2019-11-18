var express=require('express');
var app = express();
var mongoose = require('mongoose');
var mongodb=require('mongodb');
var bodyParser = require('body-parser');
var methodOverride=require('method-override');
var LocalStrategy = require('passport-local');
var passport=require('passport');
var passportLocalMongoose =require('passport-local-mongoose');
var Schema = mongoose.Schema;
var Score = require('./models/score')
var User = require('./models/user')

//Schema Quiz for testpage
var subAnswers = new Schema({
    answerText:String,
    points:Number
});
var subCategory = new Schema({
    name:String,
    description:String,
    isActive:Boolean
});

var subQuestions = new Schema({
    type:{type:String},
    text:String,
    answers:[subAnswers]
});

var totalScore = new Schema({
    _id:Schema.Types.ObjectId,
    score:Number,
    quiz:[{type:Schema.Types.ObjectId,
         ref:'Quiz'}]
})

var quizSchema = Schema({
    name:String,
    description:String,
    categories:[subCategory],
    questions:[subQuestions],
    score:Number
});

var Quiz = mongoose.model('Quiz', quizSchema);

var categories = [];
var cat1 = {name:'Test1', description:'Test1 Category', isActive:true};
var cat2 = {name:'Test2', description:'Test2 Category', isActive:true};

categories.push(cat1, cat2);

var questions=[];
    
    var q1 = {type:'Single Answer', text:'What is 3 x 4 ?', 
              answers:[
                  {answerText:'12', isCorrect:false, displayOrder:1},
              ]};
    var q2 = {type:'Single Answer', text:'What is 6 x 4 ?', 
              answers:[
                  {answerText:'24', isCorrect:false, displayOrder:1},
              ]};

    var q3 = {type:'Single Answer', text:'What is 6 x 9 ?', 
              answers:[
                  {answerText:'54', isCorrect:false, displayOrder:1},
              ]};

    var q4 = {type:'Single Answer', text:'What is 5 x 8 ?', 
              answers:[
                  {answerText:'40', isCorrect:false, displayOrder:1},
              ]};

    var q5 = {type:'Single Answer', text:'What is 9 x 12 ?', 
              answers:[
                  {answerText:'108', isCorrect:false, displayOrder:1},
              ]};
questions.push(q1,q2,q3,q4,q5);

var quiz3 = new Quiz({
    name:"Multiplication",
    description:"Multiplying Basic Numbers",
    categories:categories,
    questions:questions,
    score:5
});

quiz3.save(function(err, bob){
    if(err){
        console.log(err);
    } else {
        console.log(bob);
    }
});
