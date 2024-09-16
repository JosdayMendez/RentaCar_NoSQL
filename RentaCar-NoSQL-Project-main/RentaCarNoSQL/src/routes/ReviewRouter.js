const express = require('express');
const reviewController = require('../controllers/ReviewController.js');
const router = express.Router();

// get all reviews
router.get('/reviews', reviewController.getAllreviews);
// get a specific review
router.get('/reviews/:id', reviewController.getReviewById);
// create a new review
router.post('/reviews', reviewController.createReview);
// update a review
router.put('/reviews/:id', reviewController.updateReview);
// delete a review
router.delete('/reviews/:id', reviewController.deleteReview);


module.exports = router;
