const userModel = require('../models/UserModel.js');

const getAllUsers = async (req, res) => {
    console.log(req);
    try {
        const data = await userModel.find();
        if (!data) {
            return res.status(404).json({ message: 'Users not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await userModel.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'User not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    console.log(req.body);
    try {
        const user = userModel(req.body);
        const data = await user.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { name, email, password, phone, address, role } = req.body;
        const data = await userModel.updateOne({ _id: id }, { $set: { name, email, password, phone, address, role } });
        res.status(202).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const data = await userModel.deleteOne({ _id: id });
        res.status(204).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// login 

const login = async (req, res) => {
    console.log(req.body);
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const data = await userModel.findOne({ email: email, password: password, status: true });
        if (!data) {
            return res.status(404).json({ message: 'User not found!' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Change password

const changePassword = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { password } = req.body;
        const data = await userModel.updateOne({ _id: id }, { $set: { password } });
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login,
    changePassword
}