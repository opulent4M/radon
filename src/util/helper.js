let printDate = function(){
    let currentDate = new Date()
    console.log ("currentDate")
}

let printMonth = function() {
    let currentMonth = new Date()
    console.log ("currentMonth")
}

let bactchInfo = function (){
    console.log ('radon, W3D1, the topic for today is Nodejs module system')
        
}
module.exports.printTodayDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatch = bactchInfo