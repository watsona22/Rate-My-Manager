const router = require('express').Router();
const ratingRoutes = require('./api/homeroutes');

router.use('/ratings', ratingRoutes);


module.exports = router;