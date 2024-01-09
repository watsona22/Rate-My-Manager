const router = require('express').Router();
const { Rating } = require('../models');

router.get('/api/ratings', async (req, res) => {
    try {
        const ratingData = await Rating.findAll();
        const ratings = ratingData.map((rating) => rating.get({ plain: true }));
        res.json(ratings)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/api/ratings', async (req, res) => {
    // create a new post
    try {
        const postData = await Rating.create(req.body);
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;