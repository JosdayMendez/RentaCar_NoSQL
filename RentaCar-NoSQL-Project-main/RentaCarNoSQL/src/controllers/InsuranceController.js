const insuranceModel = require('../models/InsuranceModel.js');

const getAllInsurances = async (req, res) => {
    console.log(req);
    try {
        const data = await insuranceModel.find();
        if (!data) {
            return res.status(404).json({ message: 'insurances not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInsuranceById = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await insuranceModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'insurance not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createInsurance = async (req, res) => {
    console.log(req.body);
    try {
        const insurance = insuranceModel(req.body);
        const data = await insurance.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateInsurance = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { type_of_insurance, cost, coverage, availability } = req.body;
        const data = await insuranceModel.updateOne({ _id: id }, { $set: { type_of_insurance, cost, coverage, availability } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteInsurance = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await insuranceModel.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllInsurances,
    getInsuranceById,
    createInsurance,
    updateInsurance,
    deleteInsurance
}