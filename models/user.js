var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var Quiz = require('./quiz')
var userSchema = Schema({
    username:String,
    surname:String,
    email:String,
    password:String,
    score:Number,
    created:{type:Date, default: Date.now},
    quiz: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz"
        }
    ],
    subscription_type:String
});
userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
var User = mongoose.model("User", userSchema);

module.exports = User;
