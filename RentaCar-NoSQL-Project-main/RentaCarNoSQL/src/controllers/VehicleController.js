const vehicleModal = require('../models/VehicleModel');

const getAllVehicles = async (req, res) => {
    try {
        const data = await vehicleModal.find();
        if (!data) {
            return res.status(404).json({ message: 'Vehicles not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getVehicleById = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await vehicleModal.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'Vehicle not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createVehicle = async (req, res) => {
    console.log(req.body);
    try {
        const vehicle = vehicleModal(req.body);
        const data = await vehicle.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateVehicle = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { brand, model, year, price, transmission, status } = req.body;
        const data = await vehicleModal.updateOne({ _id: id },
            { $set: { brand, model, year, price, transmission, status } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await vehicleModal.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllVehicles,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle
}