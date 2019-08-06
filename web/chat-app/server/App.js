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

// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    if (req.method == 'OPTIONS') {
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    }
    
    next();
});

// Connect to mongodb
mongoose.connect(Common.DATABASE_URL, {useNewUrlParser: true}, (err, db) => {
    if (err) {
        console.log("Connect database is failed: " + err);
        return;
    }

    console.log("Connect database is successfully");
});

app.use(morga('dev'));
app.use(bodyParser.json());

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