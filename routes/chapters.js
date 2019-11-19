var express =  require('express')
let router = express.Router()

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

module.exports =  router;