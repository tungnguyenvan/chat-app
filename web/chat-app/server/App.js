const express       = require('express');
const app           = express();
const morga         = require('morgan');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const Common        = require('./Common');

// Route
const userRoute     = require('./api/routers/User');
const roomRoute     = require('./api/routers/Room');
const messageRoute  = require('./api/routers/Message');

// Connect to mongodb
mongoose.connect(process.env.URL_DB, {useNewUrlParser: true}, (err, db) => {
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
        return res.status(Common.STATUS_OK).json()
    }
    next();
});

// Ridrect Router
app.use('/user', userRoute);
app.use('/room', roomRoute);
app.use('/message', messageRoute);

app.use((req, res, next) => {
    const error = new Error(Common.MESS_NOT_FOUND);
    error.status = Common.STATUS_NOT_FOUND;
    next(error);
});

// Show error
app.use((error, req, res, next) => {
    res.status(error.status);
    res.json({
        error : {
            message: error.message
        }
    });
});

module.exports = app;