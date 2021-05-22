// user.js
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var passportLocalMongoose = require('passport-local-mongoose');

// var User = new Schema({
//     admin:   {
//         type: Boolean,
//         default: false
//     }
// });

// User.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', User);

//authenticatejs
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var User = require('./models/user');

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// routesjs
// var express = require('express');
// var router = express.Router();
// var passport = require('passport');

// const bodyParser = require('body-parser');
// var User = require('../models/user');

// router.use(bodyParser.json());

// router.post('/signup', (req, res, next) => {
//   User.register(new User({username: req.body.username}), 
//     req.body.password, (err, user) => {
//     if(err) {
//       res.statusCode = 500;
//       res.setHeader('Content-Type', 'application/json');
//       res.json({err: err});
//     }
//     else {
//       passport.authenticate('local')(req, res, () => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json({success: true, status: 'Registration Successful!'});
//       });
//     }
//   });
// });

// router.post('/login', passport.authenticate('local'), (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({success: true, status: 'You are successfully logged in!'});
// });

// router.get('/logout', (req, res) => {
//   if (req.session) {
//     req.session.destroy();
//     res.clearCookie('session-id');
//     res.redirect('/');
//   }
//   else {
//     var err = new Error('You are not logged in!');
//     err.status = 403;
//     next(err);
//   }
// });

// module.exports = router;

// app
// var passport = require('passport');
// var authenticate = require('./authenticate');
// ...
// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // Basic Authentication for session and cookies
// function auth (req, res, next) {
//   console.log(req.user);

//   if (!req.user) {
//     var err = new Error('You are not authenticated!');
//     err.status = 403;
//     next(err);
//   }
//   else {
//     next();
//   }
// }
// app.use(auth);
// ...
// app.use(express.static(path.join(__dirname, 'public')));