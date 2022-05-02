// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("#masaiForm").addEventListener("submit",addmatchfunc)

var addMatchArr = JSON.parse(localStorage.getItem("schedule"))||[];

function addmatchfunc(){
    event.preventDefault()
   
    var addMatchObj = {};

    var matchNum = document.querySelector("#matchNum").value
    addMatchObj["matchNum"] = matchNum

    var teamA = document.querySelector("#teamA").value
    addMatchObj["teamA"] = teamA

    var teamB = document.querySelector("#teamB").value
    addMatchObj["teamB"] = teamB

    var date = document.querySelector("#date").value
    addMatchObj["date"] = date

    var venue = document.querySelector("#venue").value
    addMatchObj["venue"] = venue

    addMatchArr.push(addMatchObj)

    localStorage.setItem("schedule",JSON.stringify(addMatchArr))
    window.location.reload()

// console.log(addMatchObj)
// console.log(addMatchArr)
}

