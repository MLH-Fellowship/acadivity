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

router.get("/register", (req, res) => {

    res.send("register page");
});


router.post("/register", async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const uname = req.body.name;
        const umail = req.body.email;
        const newUser = new User({
            name: uname,
            email: umail,
            password: hashedPassword,
            projects: [{
                project_name: '',
                tag: '',
                description: '',
                milestones: [{
                    id: '',
                    title: '',
                    status: ''
                }],
                session: [{
                    start_time: '',
                    stop_time: '',
                    duration: '',
                    milestones_covered: '',

                }]

            }],
            attendance: [{
                subject_name: '',
                total_classes: '',
                current_attendance: '',
                min_threshold: '',
            }],
            grade: [{
                current_cgpa: '',
                target_cgpa: '',
                current_semester: '',
                total_credits: '',
            }]
        });
        newUser.save();
        res.send("registered");
    } catch {
        res.send("error");
    }
});


module.exports = router;