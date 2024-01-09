// routes/usersRoute.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.getUsers);
router.delete('/users/:value', usersController.deleteUser);
router.get('/users/:value', usersController.getUser)

module.exports = router;
