// var mongoose=require('mongoose');
// var Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');

// var userSchema = Schema({
//     username:String,
//     surname:String,
//     email:String,
//     password:String,
//     score:{type:Number,default:0},
//     created:{type:Date, default: Date.now},
//     quiz: {type: Schema.Types.ObjectId,
//     ref: "Quiz"},
//     subscription_type:String
// });
// userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
// var User = mongoose.model("User", userSchema);
// module.exports = User;
