const express = require('express');
const packageController = require('../controllers/PackageController');
const router = express.Router();

// get all packages
router.get('/packages', packageController.getAllPackages);
// get a specific package
router.get('/packages/:id', packageController.getPackageById);
// create a new package
router.post('/packages', packageController.createPackage);
// update a package
router.put('/packages/:id', packageController.updatePackage);
// delete a package
router.delete('/packages/:id', packageController.deletePackage);

module.exports = router;
