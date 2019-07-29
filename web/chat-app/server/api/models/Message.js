const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id         :   mongoose.Types.ObjectId,
    room_id     :   { type: mongoose.Types.ObjectId, required: true },
    user_id     :   { type: mongoose.Types.ObjectId, required: true },
    type        :   { type: Number, require }, // 0: message
    data        :   { type: String, required: true },
    create_at   :   { type: Number, required: true },
    update_at   :   { type: Number, required: true },
});

module.exports = mongoose.model('message', messageSchema);