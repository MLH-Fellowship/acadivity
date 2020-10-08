if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const express = require("express");
const session = require('express-session');
require('../config-folder/passport-config')(passport);
router.use(express.json());

router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());
const User = require("../model/user");


router.get('/login', (req, res) => {
    res.send('login page');
})


router.post("/login", (req, res, next) => {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return res.status(500).send();
        }
        if (!user) {
            return res.status(400).json({
                error: info
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.status(200).json(user);
        });
    })(req, res, next);
})



module.exports = router;