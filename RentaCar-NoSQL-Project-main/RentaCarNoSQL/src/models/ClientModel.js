const mongoose = require('mongoose');

const ClientModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    payment: {
        type: Object,
        required: true,
    },
});

module.exports = mongoose.model('Client', ClientModel);