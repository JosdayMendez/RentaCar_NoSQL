const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId, // it'll be the client id
        ref: 'Client',
        required: true,
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId, // it'll be the vehicle id
        ref: 'Vehicle',
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    pickUpLocation: {
        type: mongoose.Schema.Types.ObjectId, // it'll be the location id
        ref: 'Branch',
        required: true,
    },
    dropOffLocation: {
        type: mongoose.Schema.Types.ObjectId, // it'll be the location id
        ref: 'Branch',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Reservation', ReservationSchema);