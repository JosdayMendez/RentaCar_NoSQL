const express = require('express');
const clientController = require('../controllers/CLientController');
const router = express.Router();

// get all Clients
router.get('/clients', clientController.getAllClients);
// get a specific Client
router.get('/client/:id', clientController.getClientById);
// create a new Client
router.post('/client', clientController.createClient);
// update a CLient
router.put('/client/:id', clientController.updateClient);
// delete a CLient
router.delete('/client/:id', clientController.deleteClient);

module.exports = router;