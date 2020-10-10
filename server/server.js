if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const config = require("./config");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);




const mongodburl = config.MONGODB_URL;
mongoose
    .connect(mongodburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(console.log(`Connected to MongoDB!`))
    .catch((err) => {
        console.log(`Error Thrown in Mongoose Connection(server.js): ${err}`);
    });




app.get("/", (req, res) => {
    res.send(`hello world this is the homepage.`);
});




const authRouteRegister = require("./routes/authRouteRegister");
app.use("/api", authRouteRegister);
const authRouteLogin = require("./routes/authRouteLogin");
const User = require("./model/user");
app.use("/api", authRouteLogin);



//get all the projects of a user
const getProject = require('./routes/getProject')
app.use('/projects', getProject)


//add a project
const addProject  = require('./routes/addProject')
app.use('/addProject',addProject)


//add a session
const addSession = require('./routes/addSession')
app.use('/addSession', addSession)


const port = process.config.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running successfully at http://localhost:${port}`);
});