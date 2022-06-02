const express = require('express');
//const { route } = require('express/lib/application');
const externalModule = require('../logger/logger.js')
const helperModule = require("../util/helper")
//const router = lodash.Router();
const lodash = require ('lodash')
const router = express.Router();
console.log('i am loving it!')
router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    return res.send('My first ever api!')
});

//router.get( '/hello' , function (req , res) {
  //let abc =['january', 'feb','march','april','may','june','july','august','sep','oct','nov','dec']
  //console.log(lodash.chunk(abc,4))
  //res.send('My second ever api')
//})

 router.get('/hello', function (req, res) {
    res.send('My second ever api!')
    const abc =['january', 'feb','march','april','may','june','july','august','sep','oct','nov','dec']
     console.log(lodash.chunk(abc,3))

});
//loggerModule.welcomeMessage()
//helperModule. printTodayDate()
// helperModule. printCurrentMonth()
// helperModule. printBatch()
// caseModule.trim()
// caseModule.changeToLowerCase()
// caseModule.changeToUpperCase()

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});




module.exports = router;
// adding this comment for no reason