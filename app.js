var express = require('express');
const request = require('request');
var cors = require('cors')
var app = express();
app.use(cors());
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local');
var passport = require('passport');
var fs = require('fs');
var passportLocalMongoose = require('passport-local-mongoose');
var config = require('./config.js');
var expressSanitizer = require("express-sanitizer");
require('dotenv').config();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use('/users', express.static(__dirname + '/public'));
app.use('/pastpapers', express.static(__dirname + '/public'));
app.use('/problemsolving', express.static(__dirname + '/public'));
app.use('/basics', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(flash());
app.enable('trust proxy');
// mongoose.connect("mongodb://neilcam4:Wanaka10@ds115283.mlab.com:15283/maths_app", { useNewUrlParser: true });
app.use(cors({
    credentials: true,
  }));
mongoose.set('useFindAndModify', false);

app.use(express.static('public'));
let port = 3000;

require('https').createServer({
    key: fs.readFileSync('snowytopmaths.co.uk.key','utf8'),
    cert: fs.readFileSync('8c0c3151b93843bd.crt','utf8'),
    ca: [fs.readFileSync('gd_bundle_g1.crt','utf8'),
        fs.readFileSync('gd_bundle_g2.crt','utf8'),
        fs.readFileSync('gd_bundle_g3.crt','utf8')] // <----- note this part
}, app).listen(443);

// app.use (function (req, res, next) {
//         if (req.secure) {
//                 // request was via https, so do no special handling
//                 next();
//         } else {
//                 // request was via http, so redirect to https
//                 res.redirect('https://' + req.headers.host 
//                 + req.url);
//         }
// });

app.use(expressSanitizer());
app.use(bodyParser.json())
app.use(methodOverride("_method"));
let examPapers = require("./routes/exam_papers")
app.use(examPapers);
let chapters = require('./routes/chapters')
app.use(chapters);

let API_KEY_MLAB = process.env.API_KEY_MLAB
let EXPRESS_SECRET = process.env.EXPRESS_SECRET
let MONGODB_KEY = process.env.MONGODB_KEY
app.use(require('express-session')({
    secret: 'Wanaka268775gjsdgfsd',
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
    questions:{type:Number,default:0},
    number:{type:Number,default:0},
    shape:{type:Number,default:0},
    data:{type:Number,default:0},
    algebra:{type:Number,default:0},
    numberError:{type:Number,default:0},
    shapeError:{type:Number,default:0},
    dataError:{type:Number,default:0},
    algebraError:{type:Number,default:0},
    gold:{type:Number,default:0},
    silver:{type:Number,default:0},
    bronze:{type:Number,default:0}
});
userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
var User = mongoose.model("User", userSchema);
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.message = req.flash("error");
    next();
});
app.enable('trust proxy');
mongoose.connect("mongodb://neilcam4:Wanaka10@ds115283.mlab.com:15283/maths_app", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } || "mongodb://localhost/maths_app")
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log("DB Connection Error");
    });



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
    console.log("error loggedIn")
}

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
app.get('/users/new', function(req,res){
    res.render('register');
});

app.get('/register', function (req, res) {
    res.render('register');
});

app.get('/freevideos', function(req,res){
    res.render('freevideos')
}
);
//handling user sign up
///****sending user details through to register page
app.post('/register', function (req, res) {
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
app.post('/registerfree', function (req, res) {
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
app.get('/', function (req, res, next) {
    res.render('home');

});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})
app.post('/users', function (req, res) {
    User.create(req.body.users, function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/users', {users:users});
        }
    })
});
//show

app.get('/log', function (req, res) {
    res.render('register');
});

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

function isPriceLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.render('pricing2');
}

app.get('/pastpapers/list', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/list', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/menu',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('problemsolving/menu',{user:user})
    })
})

app.get('/basics/index',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/index',{user:user})
    })
})

app.get('/habs2018', function(req,res){
    User.findById(req.params.id, function(err, user){
        if(err){
            console.log(err)
        } else {
            res.render('habs2018', {user:user})
        }
    })
})

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

app.get('/problemsolving/data2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/data2', {
                user: user
            })
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

app.get('/problemsolving/time1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/time1', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/time2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/time2', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/time3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/time3', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/time4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/time4', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/time5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/time5', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/addsubtract', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/addsubtract', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/addsubtract1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/addsubtract1', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/percentages1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/percentages1', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/wordedalgebra1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/wordedalgebra1', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/wordedalgebra2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/wordedalgebra2', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/wordedalgebra3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/wordedalgebra3', {
                user: user
            })

        }
    });
})

app.get('/problemsolving/wordedalgebra4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/wordedalgebra4', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/wordedalgebra5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user, testFunction) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/wordedalgebra5', 
            {
                user: user,
                testFunction: testFunction
            })
        }
    });
})

app.get('/problemsolving/volume', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/volume', {
                user: user
            })

        }
    });
})

app.get('/problemsolving/piecharts', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/piecharts', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/barcharts', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/piecharts2', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/averages', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/averages', {
                user: user
            })

        }
    });
})
app.get('/problemsolving/meanaverage', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/meanaverage', {
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

app.get('/problemsolving/averages2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/averages2', {
                user: user
            })

        }
    });
})

app.get('/problemsolving/prime1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/prime1', {
                user: user
            })

        }
    });
})

app.get('/problemsolving/prime2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/prime2', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/multdiv1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user)
            res.render('problemsolving/multdiv1', {
                user: user
            })
            console.log("user is here" + user)
        }
    });
})

app.get('/problemsolving/multdiv2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/multdiv2', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/multdiv3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/multdiv3', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/multdiv4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/multdiv4', {
                user: user
            })

        }
    });
})

app.get('/problemsolving/multdiv5',cors(), isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/multdiv5', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/sequences1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/sequences1', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/sequences2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/sequences2', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/sequences3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/sequences3', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/sequences4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/sequences4', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/fractions1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/fractions1', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/fractions2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/fractions2', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/fractions3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/fractions3', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/ratio1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/ratio1', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/ratio3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/ratio3', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/ratio4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/ratio4', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/perimeteralgebra', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/perimeteralgebra', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/isPrime', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/isPrime', {
                user: user
            })
        }
    });
})
app.get('/problemsolving/squares1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/squares1', {
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

app.get('/problemsolving/shapes6', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/shapes6', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/shapes1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/shapes1', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/shapes2', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/shapes2', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/shapes3', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/shapes3', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/shapes4', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/shapes4', {
                user: user
            })
        }
    });
})

app.get('/problemsolving/shapes5', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('problemsolving/shapes5', {
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
//pastpapers
app.get('/pastpapers/stpaulsA', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/stpaulsA', {
                user: user
            })
        }
    });
})
app.get('/pastpapers/habs2008', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/habs2008', {
                user: user
            })
        }
    });
})
app.get('/pastpapers/KWA', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/kingsWimA', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/magdalen', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/mag', {
                user: user
            })
        }
    });
})
app.get('/pastpapers/stpaulsC', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/stpaulsC', {
                user: user
            })
        }
    });
})
app.get('/pastpapers/mgs18B', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/mgs18B', {
                user: user
            })
        }
    });
})
app.get('/pastpapers/mgs18A', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/mgs18A', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/perse', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/perse', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/londoncollegiate15', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/londoncollegiate15', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/whitgift', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/whitgift', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/stgeorgeascotA', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/stgeorgeascotA', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/stgeorgeweybridge', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/stgeorgeweybridge', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/jags', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/jags', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/stolaves', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/olaves', {
                user: user
            })
        }
    });
})

app.get('/pastpapers/nlc10', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/nlc10', {
                user: user
            })
        }
    });
})
app.get('/pastpapers/albans', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('pastpapers/albans', {
                user: user
            })
        }
    });
})
app.get('/papers/KWA1', isLoggedIn, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render('papers/kingsWimA1', {
                user: user
            })
        }
    });
})
app.get('/basics/addfractions',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/addfractions',{user:user})
    })
})
app.get('/basics/algebrasolve',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/algebrasolve',{user:user})
    })
})
app.get('/basics/anglesStraightLine',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/anglesStraightLine',{user:user})
    })
})
app.get('/basics/anglepoint',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/anglepoint',{user:user})
    })
})
app.get('/basics/anglesTriangle',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/anglesTriangle',{user:user})
    })
})
app.get('/basics/anglesTriangle2',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/anglesTriangle2',{user:user})
    })
})
app.get('/basics/anglequad', isLoggedIn,function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/anglequad',{user:user})
    })
})
app.get('/basics/areasquare',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/areasquare',{user:user})
    })
})
app.get('/basics/addsubtract',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/addsubtract',{user:user})
    })
})
app.get('/basics/multiplyIntegers',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/multiplyIntegers',{user:user})
    })
})
app.get('/basics/FtoD',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/FtoD',{user:user})
    })
})
app.get('/basics/DtoF',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/DtoF',{user:user})
    })
})
app.get('/basics/FtoP',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/FtoP',{user:user})
    })
})
app.get('/basics/DtoP',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/DtoP',{user:user})
    })
})
app.get('/basics/dividingfractions',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/dividingfractions',{user:user})
    })
})
app.get('/basics/subtractfractions',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/subtractfractions',{user:user})
    })
})
app.get('/basics/piechartsangles',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/piechartsangles',{user:user})
    })
})
app.get('/basics/algebraintro',isLoggedIn, function(req,res){
    User.findById(req.params.id, function(err, user){
        res.render('basics/algebraintro',{user:user})
    })
})
app.listen(port, function (err) {
    if (err) {
        console.log("Error");
    } else {
        console.log(`Server has started on port ${port}`);
    }
})

