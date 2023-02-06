const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const noteSchema = new Schema( {
    userID: {
        type: String,
        required: true
    },
    trackID: {
        type: String,
        // unique: true,
        required: true
    },
    notes: {
        type: String,
        required: true
    },

}, {timestamps: false});

const Note = mongoose.model('notes', noteSchema);
module.exports = Note
