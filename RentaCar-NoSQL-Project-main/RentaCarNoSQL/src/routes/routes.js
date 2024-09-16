const express = require('express');
const userRouter = require('../routes/UserRouter.js');
const branchRouter = require('../routes/BranchRouter.js');
const packageRouter = require('../routes/PackageRouter.js');
const vehicleRouter = require('../routes/VehicleRouter.js');
const insuranceRouter = require('../routes/InsuranceRouter.js');
const reservationRouter = require('../routes/ReservationRoutes.js');
const reviewRouter = require('../routes/ReviewRouter.js');
const categoryRouter = require('../routes/CategoryRoutes.js');
const clientRouter = require('../routes/ClientRouter.js');

const router = express.Router();

router.use('/api', userRouter);
router.use('/api', branchRouter);
router.use('/api', packageRouter);
router.use('/api', vehicleRouter);
router.use('/api', insuranceRouter);
router.use('/api', reservationRouter);
router.use('/api', reviewRouter);
router.use('/api', categoryRouter);
router.use('/api', clientRouter);

module.exports = router;