const categoryModal = require('../models/CategoryModel');

const getAllCategories = async (req, res) => {
    try {
        const data = await categoryModal.find();
        if (!data) {
            return res.status(404).json({ message: 'Category not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCategoryById = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await categoryModal.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'Category not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createCategory = async (req, res) => {
    console.log(req.body);
    try {
        const category = categoryModal(req.body);
        const data = await category.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCategory = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { description, dailyRate, categoryName } = req.body;
        const data = await categoryModal.updateOne({ _id: id },
            { $set: { description, dailyRate, categoryName } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await categoryModal.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}