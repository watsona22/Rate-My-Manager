const router = require('express').Router();
const {Rating} = require('../models');

router.get('/login', (req, res) => {
    console.log("Loading login page!")
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('createAccount');
});


router.get('/search', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('search');
});


router.get('/reviews', async (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    const ratingData = await Rating.findAll();
  const ratings = ratingData.map((rating) => rating.get({ plain: true }));
    res.render('reviews', {layout: 'main', ratings});
});

router.get('/new', (req, res) => {

    res.render('new');
});
module.exports = router;