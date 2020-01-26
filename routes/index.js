let express = require("express");
let router = express.Router();
let User = require('../models/user');
let passport = require('passport');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.get('/users/new', function(req,res){
    res.render('register');
});

router.get('/register', function (req, res) {
    res.render('register');
});

router.get('/freevideos', function(req,res){
    res.render('freevideos')
}
);
//handling user sign up
///****sending user details through to register page
router.post('/register', function (req, res) {
    User.register(new User({
        username: req.body.username,
        surname: req.body.surname,
        year: req.body.year,
        school: req.body.school,
        medals: req.body.medals,
        score: req.body.score,
        id: req.params.id,
        email: req.body.email
    }), req.body.password, function (err, users) {
        if (err) {
            console.log(err);
            res.render("register");
        }
        req.body.username = req.body.email;
        passport.authenticate("local")(req, res, function () {
            res.redirect('/profile')
        })
    })
})

//registerfree
router.post('/registerfree', function (req, res) {
    User.register(new User({
        username: req.body.username,
        surname: req.body.surname,
        score: req.body.score,
        id: req.params.id,
        subscription_type: 'Yearly',
        email: req.body.email
    }), req.body.password, function (err, users) {
        if (err) {
            console.log(err);
            res.render("register");
        }
        req.body.username = req.body.email;
        passport.authenticate("local")(req, res, function () {
            res.redirect('/profilefree')
        })
    })
})
router.get('/', function (req, res) {
    res.render('home');

});
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})
router.post('/users', function (req, res) {
    User.create(req.body.users, function (err, users) {
        if (err) {
            console.log(err);;
        } else {
            res.redirect('/users');
        }
    })
});
//show


//update
router.put('/users/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body.users, function (err, updatedUser) {
        if (err) {
            res.redirect('/users');
        } else {
            res.redirect('/users/' + req.params.id);
        }
    })
})

router.get('/log', function (req, res) {
    res.render('register');
});


module.exports = router