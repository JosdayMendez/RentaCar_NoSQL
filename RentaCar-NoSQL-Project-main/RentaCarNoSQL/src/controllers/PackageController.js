const packageModel = require('../models/PackageModel.js');

const getAllPackages = async (req, res) => {
    console.log(req);
    try {
        const data = await packageModel.find();
        if (!data) {
            return res.status(404).json({ message: 'Packages not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPackageById = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await packageModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'Package not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createPackage = async (req, res) => {
    console.log(req.body);
    try {
        const package = packageModel(req.body);
        const data = await package.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updatePackage = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { package_name, gps, another_driver, baby_chair, description, availability, price} = req.body;
        const data = await packageModel.updateOne({ _id: id }, { $set: { package_name, gps, another_driver, baby_chair, description, availability, price } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletePackage = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await packageModel.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage
}