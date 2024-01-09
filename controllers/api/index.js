const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ratingRoutes = require('./ratingRoutes');


router.use('/user', userRoutes);
router.use('/rating', ratingRoutes);


module.exports = router;