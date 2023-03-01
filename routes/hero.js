const express = require("express")
const router = express.Router();
const controller = require('./../controllers/hero')

router.post('/cadastrar', controller.post_hero)

module.exports = router;
