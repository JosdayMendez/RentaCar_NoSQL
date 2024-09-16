const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    package_name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    gps: {
        type: Boolean,
        required: true,
    },
    another_driver: {
        type: Boolean,
        required: true,
    },
    baby_chair: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Package', PackageSchema);