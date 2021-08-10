const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://admin-user1:cdv87r1a@app-dev.gajav.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        console.log("Connection established successfully");
    })
    .catch(() => {
        console.log("Error while establishing connection to mongodb");
    })

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));    


    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        next();
    });    

console.log("hello");


module.exports = app;