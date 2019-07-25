const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    _id:        mongoose.Types.ObjectId,
    name:       { type: String, required: true },
    users:      { type: [String], required: true },
    avatar_url: { type: String, },
    create_at:  { type: Number },
    update_at:  { type: Number }
});

module.exports = mongoose.model('room', roomSchema);