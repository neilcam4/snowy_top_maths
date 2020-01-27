var mongoose = require('mongoose')
var User = require('./models/user')

function addProgress(){
    User.findOne({username:"Neil Admin"}, function(err, user){
        if(err){
            console.log(err)
        } else {
            user.quiz.push({
                quiz:"Multiplication BOOM!"
            })
            user.save();
            console.log(user)
        }
    })
}
module.exports = addProgress;