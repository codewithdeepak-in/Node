const express = require('express')
const router = express.Router();
const apiController = require('../controller/apiController')


router.post('/contact', apiController.contact);
router.get('/contact-data', apiController.contactData);
router.get('/deleteContact', apiController.deleteContact);
module.exports = router;