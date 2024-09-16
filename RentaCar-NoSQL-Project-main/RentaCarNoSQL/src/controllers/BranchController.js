const branchModel = require('../models/BranchModel.js');

const getAllbranchs = async (req, res) => {
    console.log(req);
    try {
        const data = await branchModel.find();
        if (!data) {
            return res.status(404).json({ message: 'branchs not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBranchById = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await branchModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'branch not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createBranch = async (req, res) => {
    console.log(req.body);
    try {
        const branch = branchModel(req.body);
        const data = await branch.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateBranch = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { branch_name, address, city, availability } = req.body;
        const data = await branchModel.updateOne({ _id: id }, { $set: { branch_name, address, city, availability } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteBranch = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await branchModel.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllbranchs,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
}