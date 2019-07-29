const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');

const Room      = require('../models/Room');
const checkToken = require('../middleware/AuthMiddleware');

router.get('/', checkToken, (req, res, next) => {
    Room.find().exec()
    .then(result => {
        return res.status(200).json({
            result: result
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const today = Date.now();
    const room = new Room({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        users: req.body.users,
        type: req.body.type,
        avatar_url: req.body.avatar_url,
        create_at: today,
        update_at: today
    });

    room.save()
    .then(result => {
        return res.status(200).json({
            result: result
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});

router.get('/:roomId', checkToken, (req, res, next) => {
    Room.find({ _id: req.params._id }).exec()
    .then(result => {
        return res.status(200).json({
            result: result
        })
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        })
    });
});

module.exports = router;