const trim = function(){
    const a = ("  Manik Sharma ")
    let result = a.trim ()
    console.log (result)
}

module.exports.trim = trim
const changeToLowerCase =function(){
    const a = (" Manik Sharma ")
    let result = a.toLowerCase()
    console.log(result)
}

module.exports.changeToLowerCase = changeToLowerCase
const changeToUpperCase = function (){
    const a =(" Manik Sharma ")
    let result = a.toUpperCase()
    console.log(result)
}

module.exports.changeToUpperCase = changeToUpperCase