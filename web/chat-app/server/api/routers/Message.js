const mongoose  = require('mongoose');
const express   = require('express');
const router    = express.Router();

const Message   = require('../models/Message');
const checkToken = require('../middleware/AuthMiddleware');

router.get('/', checkToken, (req, res, next) => {
    Message.find().exec()
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

router.post('/', checkToken, (req, res, next) => {
    const today = Date.now();
    const message = new Message({
        _id         :   new mongoose.Types.ObjectId(),
        room_id     :   req.body.room_id,
        user_id     :   req.body.user_id,
        type        :   0, //TODO: update dynamic type
        data        :   req.body.data,
        create_at   :   today,
        update_at   :   today
    });

    message.save()
    .then(result => {
        return res.status(200).json({
            result  :   result
        });
    })
    .catch(err => {
        return res.status(500).json({
            error   :   err
        });
    });
});

router.get('/:messageId', checkToken, (req, res, next) => {
    Message.find({ _id: req.params.messageId }).exec()
    .then(result => {
        return res.status(200).json({
            result  :   result[0]
        });
    })
    .catch(err => {
        return res.status(500).json({
            error   :   err
        });
    });
});

module.exports = router;