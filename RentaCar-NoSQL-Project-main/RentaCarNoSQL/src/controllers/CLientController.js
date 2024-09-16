const clientModel = require('../models/ClientModel');

const getAllClients = async (req, res) => {
    try {
        const data = await clientModel.find();
        if (!data) {
            return res.status(404).json({ message: 'no reservations found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await clientModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'client not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createClient = async (req, res) => {
    try {
        const client = clientModel(req.body);
        const data = await client.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateClient = async (req, res) => {
    try {
        const { client_id } = req.params;
        const { firstName, lastName, email, phoneNumber, payment } = req.body;
        const data = await clientModel.updateOne({_id: client_id }, { $set: { firstName, lastName, email, phoneNumber, payment } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteClient = async (req, res) => {
    try {
        const { client_id } = req.params;
        const data = await clientModel.deleteOne({ _id: client_id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}