(function(){
// IIFE start
console.info("Hello JS")
var myNode = document.createElement("div");
document.getElementById("digitalClock").appendChild(myNode);

var updateTime = function(){
    console.info('tick tock');
    var myDate = new Date();
    myNode.innerHTML = myDate.toTimeString().substring(0,8);
}
setInterval(updateTime, 1000);
updateTime();

// END
})();