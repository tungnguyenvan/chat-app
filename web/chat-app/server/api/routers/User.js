const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');

const User      = require('../models/User');
const authMiddleware = require('../middleware/AuthMiddleware');

/**
 * Get All users, but this api maybe not working for user
 */
router.get('/', (req, res, next) => {
    User.find().exec()
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

/**
 * User sign up new account
 */
router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hass) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }

        const today = Date.now();
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
            update_at:      today,
            server_id:      ''
        });

        // save
        user.save()
        .then(result => {
            return res.status(200).json({
                active_account: 'localhost:3001/user/active/' + token
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                error :err
            });
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
router.get("/:userId", authMiddleware, (req, res, next) => {
    const _id = req.params.userId;
    User.find({ _id: _id })
    .select(' _id email name avatar_url phone_number birth_day is_online server_id ')
    .exec()
    .then(result => {
        res.status(200).json({
            result: result
        });
    })
    .catch(err => {
        res.status(404).json({
            error: err
        })
    });
});

router.post('/login', (req, res, next) => {
    User.find({ email: req.body.email }).exec()
    .then(result => {
        if (result.length < 1) {
            return res.status(404).json({
                message: 'email not found'
            });
        }

        bcrypt.compare(req.body.password, result[0].password, (err, hass) => {
            if (err) {
                console.log(err);
                return res.status(401).json({
                    message: 'auth failed'
                });
            }

            const token = jwt.sign(
                {
                    email: req.body.email,
                    _id:    result[0]._id
                }, 'secret', { expiresIn: "1h" });
            console.log(token);

            const user = result[0];
            user.password = '';
            user.token = token;
            return res.status(200).json({ 
                result: user
             });
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;