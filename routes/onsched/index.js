const express = require('express')

const appointmentRoutes  = require('./appointmentRoutes')
const availabilityRoutes = require('./availabilityRoutes')
const locationRoutes     = require('./locationRoutes')
const errorResponses     = require('../../middlewares/onschedErrorResponses')


// initialize the router
const router = express.Router()


//------------------
// Route Handlers
//------------------
router.use( '/appointments', appointmentRoutes )
router.use( '/availability', availabilityRoutes )
router.use( '/locations',    locationRoutes )


//-------------------------------------------
// route specific error handling middleware
// error middleware must come after routes
// and all other middleware
//-------------------------------------------
router.use( errorResponses )


module.exports = router

