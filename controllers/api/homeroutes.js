const router = require('express').Router();
const { Rating } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const ratingData = await Rating.findAll({
        });
        res.status(200).json(ratingData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;