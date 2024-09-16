const express = require('express');
const reservationController = require('../controllers/ReservationController');
const router = express.Router();

// get all reservations
router.get('/reservations', reservationController.getAllReservations);
// get a specific reservation
router.get('/reservation/:id', reservationController.getReservationById);
// create a new reservation
router.post('/reservation', reservationController.createReservation);
// update a reservation
router.put('/reservation/:id', reservationController.updateReservation);
// delete a reservation
router.delete('/reservation/:id', reservationController.deleteReservation);

module.exports = router;
