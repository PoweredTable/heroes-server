const express = require("express")
const router = express.Router();
const controller = require('./../controllers/villain')

router.post('/cadastrar', controller.post_villain)

module.exports = router;