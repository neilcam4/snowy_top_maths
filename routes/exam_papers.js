var express = require("express");
var router = express.Router()
var User = require('../models/user');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
    console.log("error loggedIn")
}

router.get('/pastpapersfree', function (req, res) {
    res.render('pastpapersfree');
});



router.get('pastpapers/stpaulsA', function (req, res) {
    res.render('pastpapers/kingsWimA');
});

// router.get('/habs2008', isLoggedIn, function (req, res) {
//     res.render('habs2008');
// });

router.get('/aboutus', function (req, res) {
    res.render('about');
});

router.get('pastpapers/KingsWimA', isLoggedIn, function (req, res) {
    res.render('papers/kingsWimA');
});
router.get('/magdalen', isLoggedIn, function (req, res) {
    res.render('mag');
});
router.get('/terms', function (req, res) {
    res.render('terms');
});
router.get('/stpaulgirlsA', function (req, res) {
    res.render('stpaulgirlsA');
});
router.get('/stpaulgirlsC', isLoggedIn, function (req, res) {
    res.render('stpaulC');
});
router.get('/mgs18B', isLoggedIn, function (req, res) {
    res.render('mgs18B');
});
router.get('/mgs18A', isLoggedIn, function (req, res) {
    res.render('mgs18A');
});
router.get('/perseA', isLoggedIn, function (req, res) {
    res.render('perseA');
});
router.get('/nlc15', isLoggedIn, function (req, res) {
    res.render('nlc15');
});
router.get('/whitgift', isLoggedIn, function (req, res) {
    res.render('whitgift');
});

router.get('/ascot', isLoggedIn, function (req, res) {
    res.render('ascot');
});
router.get('/weybridge', isLoggedIn, function (req, res) {
    res.render('weybridge');
});
router.get('/jags', isLoggedIn, function (req, res) {
    res.render('jags');
});
router.get('/city10', isLoggedIn, function (req, res) {
    res.render('city10');
});
router.get('/olave', isLoggedIn, function (req, res) {
    res.render('olave');
});
router.get('/albans', isLoggedIn, function (req, res) {
    res.render('albans');
});

module.exports = router;