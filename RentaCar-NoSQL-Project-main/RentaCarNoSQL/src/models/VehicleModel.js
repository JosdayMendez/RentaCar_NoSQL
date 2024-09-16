const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('Vehicle', VehicleSchema);