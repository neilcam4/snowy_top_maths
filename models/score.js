var mongoose = require('mongoose');


var scoreSchema = mongoose.Schema({
    score:Number
});

module.exports = mongoose.model("Score", scoreSchema)