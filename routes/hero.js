const express = require('express');
const router = express.Router();
const controller = require('./../controllers/hero')

router.post('/cadastrar', controller)

module.exports = router;