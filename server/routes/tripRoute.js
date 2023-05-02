const express = require('express');
const router = express.Router();
const {
    getTripInfo,
   
} = require('../controllers/tripController')

router.get('/', getTripInfo)

module.exports = router