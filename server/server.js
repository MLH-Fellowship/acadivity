const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const app = express();

const mongodburl = config.MONGODB_URL;
mongoose.connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log(`Connected to MongoDB!`)).catch((err) => {
    console.log(`Error Thrown in Mongoose Connection(server.js): ${err}`);
});

const port = process.config.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running successfully at https://localhost:${port}`);
});