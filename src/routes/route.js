const express = require('express');
const externalModule = require('../logger/logger.js')
const helperModule = require("../util/helper")
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});
//loggerModule.welcomeMessage()
helperModule. printTodayDate()
helperModule. printCurrentMonth()
helperModule. printBatch()


module.exports = router;
// adding this comment for no reason