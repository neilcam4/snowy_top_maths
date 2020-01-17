var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// var scoreSchema = mongoose.model('Score').schema;

var UserSchema = mongoose.Schema({
    username:String,
    surname:String,
    school:String,
    year:String,
    email:String,
    medals:Number,
    password:String,
    score:Number,
    quiz: String,
    subscription_type:String
});
UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports =mongoose.model("User", UserSchema);

