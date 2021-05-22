const { User } = require('../models/model');
const router = require('express').Router();
const passport = require('passport');

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser( async function(id, done) {
    await User.findById(id, function(err, user) {
        done(err, user);
    });
});

router.get('/auth', (req, res) => {
    if(req.isAuthenticated()){
        res.status(200).json(req.user);
    }
    else{
        return res.json({
            isAuth: false,
            error: true
        });
    }
});
router.post('/register', async (req, res) => {
    await User.register( {email: req.body.email}, req.body.password, (err,user)=>{
        if(err) return res.json({ success: false, message: err });    // How to send error  ?
        else res.status(200).json({
            success: true
        });
    });
});

router.get('/login_success', (req, res) => {
    console.log("geldim successe");
    return res.json({
        loginSuccess: true
    });
});

router.get('/login_error', (req, res) => {
    console.log("geldim errora");
    return res.json({
        loginSuccess: false,
        message: "Invalid email or password"
    }) 	
});


router.post("/login",passport.authenticate("local", { successRedirect: '/api/users/login_success',
failureRedirect: '/api/users/login_error' }) , function (req, res) {
});

router.get('/logout', (req, res) => {
    if(req.isAuthenticated){
        req.logout();
        res.status(200).json(true);
    }
    else return res.json(false);
});

module.exports = router;