const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel');  // Optional, you can ignore this if you're hardcoding
const generateToken = require("../utils/generateToken");
const { httpRequestTimer, counter } = require('../metrics');

// Register Admin (You can keep the same or remove it if you're just focusing on login)
const registerAdmin = asyncHandler(async (req, res) => {
    const apiPath = req.baseUrl;
    const end = httpRequestTimer.startTimer();
    const { username, password } = req.body;

    // Hardcode username and password for testing purposes (skip the DB check)
    const hardcodedUsername = 'admin';  // Hardcoded username
    const hardcodedPassword = 'admin';  // Hardcoded password

    // Check if the provided username and password match the hardcoded ones
    if (username !== hardcodedUsername || password !== hardcodedPassword) {
        counter.labels('Admin Invalid Credentials', '400').inc();
        const route = apiPath;
        end({ route, code: res.statusCode, method: req.method });
        res.status(400);
        throw new Error('Invalid username or password');
    }

    // If credentials are correct, generate and return a token
    const token = generateToken('hardcoded_id'); // Use a hardcoded ID

    // Send successful response with token and username
    counter.labels('Admin Login Success', '200').inc();
    const route = apiPath;
    end({ route, code: res.statusCode, method: req.method });
    res.status(200).json({
        _id: 'hardcoded_id',
        username: 'admin',
        token
    });
});

module.exports = { registerAdmin, login };


