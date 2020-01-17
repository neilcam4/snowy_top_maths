var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var quizSchema = Schema({
    name:String,
    description:String,
    // categories:[subCategory],
    // questions:[subQuestions],
    // score:[totalScore]
});

module.exports = mongoose.model('Quiz', quizSchema);
