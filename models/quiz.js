var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = Schema({
    quiz:String
});
var Quiz = mongoose.model("Quiz", quizSchema)
module.exports = Quiz;
