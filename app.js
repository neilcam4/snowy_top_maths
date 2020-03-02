var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local');
var passport = require('passport');
var passportLocalMongoose = require('passport-local-mongoose');
// var User = require('./models/user');
// var Quiz = require('./models/quiz');
var config = require('./config.js');
var expressSanitizer = require("express-sanitizer");
require('dotenv').config();
var cors = require('cors')
app.use(cors())
app.use(express.json())
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use('/users', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(flash());
app.use(expressSanitizer());
app.use(bodyParser.json())
app.use(methodOverride("_method"));
let examPapers = require("./routes/exam_papers")
app.use(examPapers);
let chapters = require('./routes/chapters')
app.use(chapters);
let routes = require("./routes/index")
app.use(routes)

    
let API_KEY_MLAB = process.env.API_KEY_MLAB
let EXPRESS_SECRET = process.env.EXPRESS_SECRET
let MONGODB_KEY = process.env.MONGODB_KEY
app.use(require('express-session')({
    secret: EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false
}));

// SCHEMAS
//QUIZ 
var quizSchema = mongoose.Schema({
    name:String,
    score:{type:Number,default:0},
    created:{type:Date, default: Date.now}
    
});
var Quiz = mongoose.model("Quiz", quizSchema)
//USER SCHEMA
var userSchema = mongoose.Schema({
    username:String,
    surname:String,
    email:String,
    password:String,
    score:{type:Number,default:0},
    created:{type:Date, default: Date.now},
    quiz: [quizSchema],
    subscription_type:String,
    gold:{type:Number,default:0},
    silver:{type:Number,default:0},
    bronze:{type:Number,default:0}
});
userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
var User = mongoose.model("User", userSchema);

app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.message = req.flash("error");
    next();
});
mongoose.set('useFindAndModify', false);
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.static('public'));
let port = 3000;
app.enable('trust proxy');
mongoose.connect(MONGODB_KEY, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } || "mongodb://localhost/maths_app")
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log("DB Connection Error");
    });
// mongoose.connect("mongodb://localhost/maths_app", function(err, db){
//     if(err){
//         console.log("database not connected")
//     } else {
//         console.log("database CONNECTED")
//     }
// })

app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    //have changed this redirect away from /profile to signup page
    req.body.username = req.body.email;
    passport.authenticate("local")(req, res, function () {
    res.redirect('/profile')
    })
})
app.put('/users/quiz', function(req,res){
    User.findById(req.params.id, function(err, user){
        if(err){
            console.log("An error has happened" + err)
            res.redirect('/profile')
        } else {
            console.log(user)
            Quiz.create({name:"Bruno Player Rating", score:500},
            function(err, quiz){
                if(err){
                    console.log(err)
                }else {
                    quiz.save()
                    user.quiz.push(quiz)
                    user.save()
                    res.redirect('/users/' + req.params.id)
                }
            }
            )
        }
    })
})
app.get('/profile', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            if (req.user.subscription_type == 'Monthly') {
                res.render('profile', {user:user});
            } else if (req.user.subscription_type == 'Yearly') {
                res.render('profile', {user:user});           
            } else {
                res.redirect('pricing');
            }
        }
    });
});


//USER ROUTES
//SHOW
app.get('/users/:id', isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        if(err){
            res.redirect('/profile')
        } else {
            res.render("show", {user:user})
        }
    })
})
//EDIT
app.get('/users/:id/edit',isLoggedIn,function(req,res){
    User.findById(req.params.id, function(err, user){
        if(err){
            res.redirect('/profile')
        } else {
            res.render("edit", {user:user})
        }
    })
})

//update
// app.put('/users/:id', function (req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body.users, function (err, updatedUser) {
//         if (err) {
//             res.redirect('/users');
//         } else {
//             res.redirect('/users/' + req.params.id);
//         }
//     })
// })

app.put('/users/:id', function(req,res){
    res.send("this is the update route")
})
//signup middle page
app.get('/signup', isLoggedIn, function (req, res) {
    User.findById(req.params.id, req.body.users, function (err, showUser) {
        if (err) {
            res.redirect('/');
        } else {
            res.render("signup", {
                users: showUser
            });
        }
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You have not logged in" )
    res.redirect('/login');
}

function isPriceLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.render('pricing2');
}

app.get('/pricing', isPriceLoggedIn, function (req, res) {
    res.render('pricing')
});
app.post("/yearlyCHarge", isLoggedIn, (req, res) => {
    stripe.customers.create({
            email: req.body.stripeEmail,
            plan: STRIPE_YEARLY_PLAN,
            source: req.body.stripeToken
        })
        .then(User.update({
                username: req.user.username
            }, {
                subscription_type: 'Yearly'
            }, {
                multi: true
            },
            function (err, numberAffected) {}))
        .then(yearlyCHarge => res.redirect("profile"));
});


app.post("/monthlyCharge", isLoggedIn, (req, res) => {
    stripe.customers.create({
            email: req.body.stripeEmail,
            plan: STRIPE_MONTHLY_PLAN,
            source: req.body.stripeToken
        })
        .then(User.update({
                username: req.user.username
            }, {
                subscription_type: 'Monthly'
            }, {
                multi: true
            },
            function (err, numberAffected) {}))
        .then(monthlyCharge => res.redirect("profile"));
});
//pages
app.get('/sequences', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('sequences', {
                user: user
            })
        }
    });
})



app.get('/data2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('data2', {
                user: user
            })
            console.log(user)
        }
    });
})
app.get('/data3', isLoggedIn, function(req,res){
    User.find({}, function(err, user){
        if(err){
            console.log(err)
        } else {
            res.render("data3", {user:user})
        }
    })   
})
app.get('/data3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('data3', {
                user: user
            })
        }
    });
})

app.get('/data4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('data4', {
                user: user
            })
        }
    });
})

app.get('/time1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('time1', {
                user: user
            })
        }
    });
})

app.get('/time2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('time2', {
                user: user
            })
        }
    });
})

app.get('/time3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('time3', {
                user: user
            })
        }
    });
})

app.get('/time4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('time4', {
                user: user
            })
        }
    });
})

app.get('/time5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('time5', {
                user: user
            })
        }
    });
})



app.get('/addsubtract', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('addsubtract', {
                user: user
            })
        }
    });
})
app.get('/addsubtract1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('addsubtract1', {
                user: user
            })
        }
    });
})

app.get('/multdiv', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user,page) {
        if (err) {
            console.log(err);
        } else {
            res.render('multdiv', {
                user: user
            })
        }
    });
})

app.get('/fractions', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('fractions', {
                user: user
            })

        }
    });
})
app.get('/percentages', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('percentages', {
                user: user
            })

        }
    });
})
app.get('/percentages1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('percentages1', {
                user: user
            })
        }
    });
})
app.get('/decimals', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('decimals', {
                user: user
            })

        }
    });
})
app.get('/equations', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('equations', {
                user: user
            })

        }
    });
})
app.get('/addsubtract1', isLoggedIn, function (req, res) {
    config;
    User.findById(req.params.id, function (err, user, config) {
        if (err) {
            console.log(err);
        } else {
            res.render('addsubtract1', {
                user: user,
                config: config
            })

        }
    });
})
app.get('/addsubtract2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('addsubtract2', {
                user: user
            })

        }
    });
})
app.get('/wordedalgebra', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('wordedalgebra', {
                user: user
            })

        }
    });
})

app.get('/wordedalgebra1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('wordedalgebra1', {
                user: user
            })

        }
    });
})

app.get('/wordedalgebra2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('wordedalgebra2', {
                user: user
            })

        }
    });
})

app.get('/wordedalgebra3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('wordedalgebra3', {
                user: user
            })

        }
    });
})

app.get('/wordedalgebra4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('wordedalgebra4', {
                user: user
            })

        }
    });
})
app.get('/wordedalgebra5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user, testFunction) {
        if (err) {
            console.log(err);
        } else {
            res.render('wordedalgebra5', 
            {
                user: user,
                testFunction: testFunction
            })

        }
    });
})
app.get('/area', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('area', {
                user: user
            })

        }
    });
})
app.get('/perimeter', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('perimeter', {
                user: user
            })

        }
    });
})
app.get('/volume', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('volume', {
                user: user
            })

        }
    });
})
app.get('/properties', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('properties', {
                user: user
            })

        }
    });
})
app.get('/piecharts', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('piecharts', {
                user: user
            })
        }
    });
})
app.get('/barcharts', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('piecharts2', {
                user: user
            })
        }
    });
})
app.get('/averages', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('averages', {
                user: user
            })

        }
    });
})

app.get('/averages1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('averages1', {
                user: user
            })

        }
    });
})

app.get('/averages2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('averages2', {
                user: user
            })

        }
    });
})

app.get('/prime', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('prime', {
                user: user
            })

        }
    });
})

app.get('/prime1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('prime1', {
                user: user
            })

        }
    });
})

app.get('/prime2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('prime2', {
                user: user
            })

        }
    });
})
app.get('/prime3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('prime3', {
                user: user
            })

        }
    });
})

app.get('/prime4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('prime4', {
                user: user
            })

        }
    });
})

app.get('/multdiv1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user)
            res.render('multdiv1', {
                user: user
            })
            console.log("user is here" + user)
        }
    });
})

app.get('/multdiv2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('multdiv2', {
                user: user
            })
        }
    });
})

app.get('/multdiv3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('multdiv3', {
                user: user
            })
        }
    });
})

app.get('/multdiv4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('multdiv4', {
                user: user
            })

        }
    });
})

app.get('/multdiv5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('multdiv5', {
                user: user
            })
        }
    });
})
app.get('/sequences1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('sequences1', {
                user: user
            })
        }
    });
})

app.get('/sequences2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('sequences2', {
                user: user
            })
        }
    });
})
app.get('/sequences3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('sequences3', {
                user: user
            })
        }
    });
})
app.get('/sequences4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('sequences4', {
                user: user
            })
        }
    });
})
app.get('/fractions1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('fractions1', {
                user: user
            })
        }
    });
})
app.get('/fractions2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('fractions2', {
                user: user
            })
        }
    });
})
app.get('/fractions3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('fractions3', {
                user: user
            })
        }
    });
})


app.get('/ratio', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('ratio', {
                user: user
            })

        }
    });
})
app.get('/ratio1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('ratio1', {
                user: user
            })
        }
    });
})
app.get('/ratio3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('ratio3', {
                user: user
            })
        }
    });
})
app.get('/ratio4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('ratio4', {
                user: user
            })
        }
    });
})
app.get('/ratio5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('ratio5', {
                user: user
            })
        }
    });
})

app.get('/squares1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('squares1', {
                user: user
            })
        }
    });
})

app.get('/squares2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('squares2', {
                user: user
            })
        }
    });
})

app.get('/squares3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('squares3', {
                user: user
            })
        }
    });
})

app.get('/squares4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('squares4', {
                user: user
            })
        }
    });
})

app.get('/shapes1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('shapes1', {
                user: user
            })
        }
    });
})

app.get('/shapes2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('shapes2', {
                user: user
            })
        }
    });
})

app.get('/shapes3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('shapes3', {
                user: user
            })
        }
    });
})

app.get('/shapes4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('shapes4', {
                user: user
            })
        }
    });
})

app.get('/shapes5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('shapes5', {
                user: user
            })

        }
    });
})

app.get('/config', isLoggedIn, function (req, res) {
    res.send(API_KEY_MLAB)
})

app.get('/newuser', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('newuser', {
                user: user
            })
        }
    });
})
app.get('/profile2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('profile2', {
                user: user
            });
        }
    });
})
app.get('/specialoffer', function (req, res) {
    res.render('specialoffer');
});
app.get('/registerfree', function (req, res) {
    res.render('registerfree');
});
app.get('/profilefree', isLoggedIn, function (req, res) {
    res.render('profilefree');
});

app.get('/help', function(req,res){
    res.send('/multdiv1.json')
})

app.get('/TrueOrFalse', function(req,res){
    res.render('TorF.ejs')
})

app.listen(port, function (err) {
    if (err) {
        console.log("Error");
    } else {
        console.log(`Server has started on port ${port}`);
    }
})