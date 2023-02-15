const express = require('express');
const router = express.Router();
const passport = require('passport');

const { recaptcha_key_1, recaptcha_key_2 } = require('../lib/settings');
const Recaptcha = require('express-recaptcha').RecaptchaV2;
const recaptcha = new Recaptcha(recaptcha_key_1, recaptcha_key_2);

const { getHashedPassword, randomText } = require('../lib/function');
const { checkUsername, addUser } = require('../database/db');
const { notAuthenticated, captchaLogin, captchaRegister } = require('../lib/auth');

router.get('/', notAuthenticated, (req, res) => {
    res.render('login', {
        layout: 'layouts/main'
    });
});

router.get('/login', (req, res) => {
    res.render('login', {
        layout: 'layouts/main4'
    });
});

router.post('/login', async(req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/docs',
        failureRedirect: '/users/login',
        failureFlash: true,
    })(req, res, next);
});

router.get('/register', (req, res) => {
    res.render('register', {
        layout: 'layouts/main4'  
    });
});

router.post('/register', async (req, res) => {
    try {
        let {username, password, confirmPassword } = req.body;
        if (password.length < 6 || confirmPassword < 6) {
            req.flash('error_msg', 'Password must be at least 6 characters');
            return res.redirect('/users/register');
        }
        if (password === confirmPassword) {
            let checking = await checkUsername(username);
            if(checking) {
                req.flash('error_msg', 'A user with the same Username already exists');
                return res.redirect('/users/register');
            } else {
                let hashedPassword = getHashedPassword(password);
                let apikey = randomText(8);
                addUser(username, hashedPassword, apikey);
                req.flash('success_msg', 'You are now registered and can login');
                return res.redirect('/users/login');
            }
        } else {
            req.flash('error_msg', 'Password does not match.');
            return res.redirect('/users/register');
        }
    } catch(err) {
        console.log(err);
    }
})

router.get('/logout', (req,res) => {
    req.logout();
    req.flash('success_msg', 'logout success');
    res.redirect('/users/login');
});

module.exports = router;
