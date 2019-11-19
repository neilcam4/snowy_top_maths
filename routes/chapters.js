var express =  require('express')
let router = express.Router()
let User = require('../models/user');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.get('/test5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('test5', {
                user: user
            })
        }
    });
})

router.get('/time', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('time', {
                user: user
            })

        }
    });
})

module.exports =  router;