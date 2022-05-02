// write js code here corresponding to matches.html

var addMatchArr = JSON.parse(localStorage.getItem("schedule"))

var favArr = JSON.parse(localStorage.getItem("favourites"))||[];

addMatchArr.map(function(el){
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = el.matchNum

    var td2 = document.createElement("td")
    td2.innerText = el.teamA
    
    var td3 = document.createElement("td")
    td3.innerText = el.teamB
    
    var td4 = document.createElement("td")
    td4.innerText = el.date
    
    var td5 = document.createElement("td")
    td5.innerText = el.venue
    
    var td6 = document.createElement("td")
    td6.innerText = "Favourite"
    td6.style.cursor = "pointer"
    td6.style.color = "green"
    
    td6.addEventListener("click",favouritefunc)
    function favouritefunc(){
     favArr.push(el)
     localStorage.setItem("favourites",JSON.stringify(favArr))
    //  console.log(favArr)
   
   
    }


    document.querySelector("tbody").append(tr)
    tr.append(td1,td2,td3,td4,td5,td6)
})
