const router = require('express').Router();
const { Rating, Manager } = require('../../models');

router.get('/', async (req, res) => {
    // get all ratings
    try {
        const ratingData = await Rating.findAll({
            include: [{ model: Manager }],

        });
        res.json(ratingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new rating
    try {
        const postData = await Rating.create(req.body);
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;