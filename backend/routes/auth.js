const express = require('express')
const router = express.Router()

//MIDDLEWARE
const { authCheck } = require('../middleware/auth')



//CONTROLLERS
const { createOrUpdateUser } = require('../controllers/auth')
router.post('/create-or-update-user', authCheck, createOrUpdateUser)



module.exports = router