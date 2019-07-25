const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');

const User      = require('../models/User');

router.get('/', (req, res, next) => {
    
});

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

router.get('active/:token', (req, res, next) => {
    User.find({ token: req.params.token }).exec()
    .then(result => {
        if (result.length > 0) {
            // Active user
            const _id = result[0]._id;
            User.update({ _id: _id }, { $set: { active: true } }).exec()
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

module.exports = router;