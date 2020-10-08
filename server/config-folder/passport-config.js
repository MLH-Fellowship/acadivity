const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy

function initialize(passport, getUserByEmail, getUserById) {
    console.log("inside initialize function first line");
    const authenticateUser = async (email, password, done) => {
        console.log("inside autheticate user function");
        const user = getUserByEmail(email);
        console.log("getting user by email");
        if (user == null) {
            return done(null, false, {
                message: 'No User with that email'
            })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                console.log("inside if statement where it compares password and returns true");
                return done(null, user);
            } else {
                console.log("inside else statement where it compares password and returns false");
                return done(null, false, {
                    message: "Password incorrect"
                })
            }

        } catch (e) {
            return done(e);
        }
    }


    passport.use(new LocalStrategy({
            usernameField: 'email'
        },
        authenticateUser));

    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize