 (function(){
// // start
var staff = JSON.parse(localStorage.getItem('staffList'));
if(staff === null){
    staff = [];
}


var rebuildList = function(){
    document.getElementById('staffTable').innerHTML = "";
    staff.forEach(function(element) {
        var newStaffRow = document.createElement("tr");
        var newStaffName = document.createElement("td");
        newStaffName.innerHTML = element.name;
        var newStaffEmail = document.createElement("td");
        newStaffEmail.innerHTML = element.email;
        newStaffRow.appendChild(newStaffName);
        newStaffRow.appendChild(newStaffEmail);
        document.getElementById('staffTable').appendChild(newStaffRow);
    });
    localStorage.setItem('staffList', JSON.stringify(staff));
}

// localstorage
if(localStorage.getItem("count") === null){
    localStorage.setItem("count", 1);
}else{
    localStorage.setItem("count", parseInt(localStorage.getItem("count"))+1);
}

// document.getElementById("myParagraph").addEventListener("click",(ev)=>{
//     console.info("hi I was clicked")
//     console.info(ev.target)
//     ev.target.style.backgroundColor = "#f00";
// })

document.getElementById("addStaffForm").addEventListener("submit", function(ev){
    ev.preventDefault();
    let newStaffName = document.getElementById('staffName').value;
    let newStaffEmail= document.getElementById('staffEmail').value;
    staff.push({name: newStaffName, email: newStaffEmail});
    console.dir(staff)
    rebuildList();
})

rebuildList();

// // end
 })();