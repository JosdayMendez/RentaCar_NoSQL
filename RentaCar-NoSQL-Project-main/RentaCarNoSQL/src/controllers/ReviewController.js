const reviewModel = require('../models/ReviewModel.js');

const getAllreviews = async (req, res) => {
    console.log(req);
    try {
        const data = await reviewModel.find();
        if (!data) {
            return res.status(404).json({ message: 'reviews not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getReviewById = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await reviewModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'review not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createReview = async (req, res) => {
    console.log(req.body);
    try {
        const review = reviewModel(req.body);
        const data = await review.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateReview = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { clientName, clientEmail, reviewDescription } = req.body;
        const data = await reviewModel.updateOne({ _id: id }, { $set: { clientName, clientEmail, reviewDescription } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteReview = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await reviewModel.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllreviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
}