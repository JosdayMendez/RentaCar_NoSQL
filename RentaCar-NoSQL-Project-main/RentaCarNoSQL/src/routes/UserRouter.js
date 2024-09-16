const express = require('express');
const userController = require('../controllers/UserController.js');
const router = express.Router();

// get all users
router.get('/users', userController.getAllUsers);
// get a specific user
router.get('/users/:id', userController.getUserById);
// create a new user
router.post('/users', userController.createUser);
// update a user
router.put('/users/:id', userController.updateUser);
// delete a user
router.delete('/users/:id', userController.deleteUser);

// change password
router.put('/users/:id', userController.changePassword);

// login
router.post('/login', userController.login);




module.exports = router;
