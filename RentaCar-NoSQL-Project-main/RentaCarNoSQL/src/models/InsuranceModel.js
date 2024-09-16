const mongoose = require('mongoose');

const InsuranceSchema = new mongoose.Schema({
    insureance_id: {
        type: String,
        required: true,
    },
    type_of_insurance: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    coverage: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('Insurance', InsuranceSchema);