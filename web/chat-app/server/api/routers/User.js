const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');

const User      = require('../models/User');

/**
 * Get All users, but this api maybe not working for user
 */
router.get('/', (req, res, next) => {
    User.find().exec()
    .then(result => {
        return res.status(200).json(result);
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});

/**
 * User sign up new account
 */
router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hass) => {
        if (err) {
            return res.status(process.env.ERROR).json({
                error: err
            });
        }

        const today = Date.now();
        console.log(today);
        const _id = new mongoose.Types.ObjectId();
        const token = jwt.sign(
            {
                email: req.body.email,
                _id:    _id
            }, 'secret', { expiresIn: "1h" });

        const user = new User({
            _id:        _id,
            email:      req.body.email,
            password:   hass,
            name:       req.body.name,
            phone_number:   req.body.phone_number,
            birth_day:      req.body.birth_day,
            token:          token,
            is_active:      false,
            is_online:      false,
            craete_at:      today,
            update_at:      today
        });

        // save
        user.save()
        .then(result => {
            return res.status(200).json({
                active_account: 'localhost:3001/users/active/' + token
            });
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    });
});

/**
 * Active user from token
 */
router.get('/active/:token', (req, res, next) => {
    User.find({ token: req.params.token }).exec()
    .then(result => {
        if (result.length > 0) {
            // Active user
            const _id = result[0]._id;
            User.update({ _id: _id }, { $set: { is_active: true } }).exec()
            .then(data => {
                res.status(200).json({
                    message: 'Active is successfully'
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'The token not found'
                });
            });

        } else {
            // Can not find the token
            return res.status(204).json({
                message: 'No content'
            });
        }
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});

/**
 * Get user infomations from user id
 */
router.get("/:userId", (req, res, next) => {
    const _id = req.params.userId;
    User.find({ _id: _id })
    .select(' _id email name phone_number birth_day is_online ')
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(404).json({
            message: err
        })
    });
});

module.exports = router;