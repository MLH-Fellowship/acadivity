if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const express = require("express");
const flash = require('express-flash');
const session = require('express-session');

router.use(express.json());

router.use(flash());
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());

users = [];

const initializePassport = require("../config-folder/passport-config");
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);



router.get('/login/success', (req, res) => {
    console.log("reached login/success");
    res.send('logged in successfully');
})

router.get('/login/failure', (req, res) => {

    res.send('login failed');
})

router.get('/login', (req, res) => {

    res.send('login page');
})


router.post("/login", passport.authenticate('local', {
    successRedirect: '/login/success',
    failureRedirect: '/login/failure',
    failureFlash: true
}));

router.get("/register", (req, res) => {

    res.send("register page");
});



router.post("/register", async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now.toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        res.send(users);
    } catch {
        res.send("error");
    }
    console.log(users);
});


module.exports = router;