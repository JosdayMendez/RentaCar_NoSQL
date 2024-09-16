const express = require('express');
const insuranceController = require('../controllers/InsuranceController.js');
const router = express.Router();

// get all Insurances
router.get('/insurances', insuranceController.getAllInsurances);
// get a specific Insurance
router.get('/insurances/:id', insuranceController.getInsuranceById);
// create a new Insurance
router.post('/insurances', insuranceController.createInsurance);
// update a Insurance
router.put('/insurances/:id', insuranceController.updateInsurance);
// delete a Insurance
router.delete('/insurances/:id', insuranceController.deleteInsurance);

module.exports = router;