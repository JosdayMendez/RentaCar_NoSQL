const express = require('express');
const CategoryController = require('../controllers/CategoryController.js');
const router = express.Router();

// get all categories
router.get('/categories', CategoryController.getAllCategories);
// get a specific category
router.get('/categories/:id', CategoryController.getCategoryById);
// create a new category
router.post('/vehicategories', CategoryController.createCategory);
// update a category
router.put('/categories/:id', CategoryController.updateCategory);
// delete a category
router.delete('/categories/:id', CategoryController.deleteCategory);

//export object for use in the application
module.exports = router;