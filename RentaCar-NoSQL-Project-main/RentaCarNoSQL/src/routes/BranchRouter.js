const express = require('express');
const branchController = require('../controllers/BranchController.js');
const router = express.Router();

// get all branchs
router.get('/branchs', branchController.getAllbranchs);
// get a specific branch
router.get('/branchs/:id', branchController.getBranchById);
// create a new branch
router.post('/branchs', branchController.createBranch);
// update a branch
router.put('/branchs/:id', branchController.updateBranch);
// delete a branch
router.delete('/branchs/:id', branchController.deleteBranch);

module.exports = router;
