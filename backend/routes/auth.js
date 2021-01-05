const express = require('express')
const router = express.Router()

//MIDDLEWARE
const { authCheck } = require('../middleware/auth')



//CONTROLLERS
const { 
    createOrUpdateUser,
    currentUser
 } = require('../controllers/auth')


//ENDPOINTS
router.post('/create-or-update-user', authCheck, createOrUpdateUser)
router.post('/current-user', authCheck, currentUser)




module.exports = router