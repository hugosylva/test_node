const myInfo = require("./information");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${myInfo.name}, from ${myInfo.campus}!`,
    e : "oO",
    T : "U "
}));