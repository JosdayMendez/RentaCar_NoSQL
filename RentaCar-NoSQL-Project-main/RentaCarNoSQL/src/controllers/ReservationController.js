const reservationModel = require('../models/ReservationModel');
const ClientModel = require('../models/ClientModel');

const getAllReservations = async (req, res) => {
    try {
        const data = await reservationModel.find()
            .populate('client', ['firstName', 'lastName'])
            .populate('vehicle', ['brand', 'model', 'year'])
            .populate('pickUpLocation', ['branch_name', 'city', 'address']) 
            .populate('dropOffLocation', ['branch_name', 'city', 'address']);

        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'No reservations found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getReservationById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await reservationModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'reservation not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createReservation = async (req, res) => {
    try {
        const { client, vehicle, startDate, endDate, status, pickUpLocation, dropOffLocation, price } = req.body;
        let newClient = await ClientModel.findOne({ email: client.email });

        if (!newClient) {
            newClient = await ClientModel.create(client);
        }

        const reservation = reservationModel({ client: newClient._id, vehicle, startDate, endDate, status, pickUpLocation, dropOffLocation, price });
        const data = await reservation.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateReservation = async (req, res) => {
    try {
        const { reservation_id } = req.params;
        const { clients, reservedVehicle, startDate, endDate, status, pickUpLocation, dropOffLocation, price } = req.body;
        const data = await reservationModel.updateOne({ _id: reservation_id }, { $set: { clients, reservedVehicle, startDate, endDate, status, pickUpLocation, dropOffLocation, price } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await reservationModel.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllReservations,
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation
}