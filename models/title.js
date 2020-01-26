var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var titleSchema = Schema({
    name:String
});

module.exports = mongoose.model("Title", titleSchema);