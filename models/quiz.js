var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = Schema({
    quiz:'string'
});
var Quiz = mongoose.model("Quiz", quizSchema)
module.exports = Quiz;
