const express = require('express');
const app = express();
const morga = require('morgan');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

// Connect to mongodb
mongoClient.connect(process.env.URL_DB, {useNewUrlParser: true}, (err, db) => {
    if (err) {
        console.log("Connect database is failed");
        return;
    }
    
    console.log("Connect database is successfully");
});

app.use(morga('dev'));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json()
    }
    next();
});

// Router
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Show error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message
        }
    });
});

module.exports = app;