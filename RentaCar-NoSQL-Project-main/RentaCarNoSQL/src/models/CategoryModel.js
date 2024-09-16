const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    dailyRate: {
        type: Number,
        required: true,
    },
    categoryName: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Category', CategorySchema);