const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// @route   GET api/auth
// @desc    auth route
// @access  Public
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route    POST api/auth
// @desc     authenticate user & get token
// @access   Public
router.post(
	'/',
	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			// create user variable and give it a value of found user by email

			let user = await User.findOne({ email });

			// if user is not found return error

			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid credentials' }] });
			}

			// create "isMatch" variable and give it a value of password if the password matches user

			const isMatch = await bcrypt.compare(password, user.password);

			// if match is not found return error

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid credentials' }] });
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: '5 days' },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
