const mongoose = require('mongoose');

const BranchSchema = new mongoose.Schema({
    branch_name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }
    ,
    availability: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('Branch', BranchSchema);