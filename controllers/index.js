const router = require('express').Router();
const ratingRoutes = require('./api/homeroutes');

router.use('/homeroutes', ratingRoutes);


module.exports = router;