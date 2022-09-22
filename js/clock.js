(function(){
// IIFE start
console.info("Hello JS")
var myNode = document.createElement("div");
document.getElementById("digitalClock").appendChild(myNode);

var updateTime = function(){
    console.info('tick tock');
    var myDate = new Date();
    myNode.innerHTML = myDate.toTimeString().substring(0,8);
    // seconds
    var seconds = myDate.getSeconds();
    var rotSeconds = (seconds * 6) - 90;
    document.getElementById("secondHand").style.transform = `rotate(${rotSeconds}deg)`;
    // minutes
    var minutes = myDate.getMinutes();
    var rotMins = (minutes * 6) -90;
    document.getElementById("minHand").style.transform = `rotate(${rotMins}deg)`;
    // hours
    var hours = myDate.getHours();
    //hours = hours + minutes/60;
    hours += minutes/60;
    var rotHours = (hours * 30) -90;
    document.getElementById("hrHand").style.transform = `rotate(${rotHours}deg)`;

}
setInterval(updateTime, 1000);
updateTime();
/// analogue clock
document.getElementById("hrHand").style.backgroundColor = "#0f0";



// END
})();