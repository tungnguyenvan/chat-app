const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: {
        type: String,
        require: true,
        unique: true,
        math: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:       { type: String, require: true },
    name:           { type: String, require: true },
    phone_number:   { type: String },
    birth_day:      { type: Number },
    token:          { type: String, require: true },
    is_active:      { type: Boolean },
    is_online:      { type: Boolean },
    craete_at:      { type: String },
    update_at:      { type: String }
});

module.exports = mongoose.model('user', userSchema);