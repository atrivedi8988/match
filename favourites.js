// write js code here corresponding to favourites.html

var favArr = JSON.parse(localStorage.getItem("favourites"))||[]


favArr.map(function(el,i){
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
    td6.innerText = "Remove"
    td6.style.cursor = "pointer"
    td6.style.color = "red"
    
    td6.addEventListener("click",removefunc)
    function removefunc(){


        var arr = JSON.parse(localStorage.getItem("favourites"))

    //     console.log(arr)
     
     arr.splice(i,1);
    //  console.log(arr)
     favArr = localStorage.setItem("favourites",JSON.stringify(arr))
     window.location.reload()
    
      
    }


    document.querySelector("tbody").append(tr)
    tr.append(td1,td2,td3,td4,td5,td6)
})
