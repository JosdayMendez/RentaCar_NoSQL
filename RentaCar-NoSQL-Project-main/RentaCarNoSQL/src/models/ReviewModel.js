const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
    },
    clientEmail: {
        type: String,
        required: true,
    },
    reviewDescription: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Review', ReviewSchema);