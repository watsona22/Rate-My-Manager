const router = require('express').Router();
const { User } = require('../../models');


router.post('/signup', async (req, res) => {
    // create a new login
    try {
        const userData = await User.create(req.body);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Please enter your name, email and password.' });
            return;
        }
        res.json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the posted e-mail address
        const userDataLogin = await User.findOne({ where: { email: req.body.email } });
        console.log("userdata", userDataLogin);

        if (!userDataLogin) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Verify the posted password with the password store in the database
        const validPassword = await userDataLogin.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.user_id = userDataLogin.id;
            req.session.logged_in = true;

            res.json({ user: userDataLogin, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log("this here error", err);
        res.status(400).json(err);

    }
});

router.get('/all-users', async (req, res) => {
    try {
        const userAll = await User.findAll({
        });
        res.json(userAll);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
