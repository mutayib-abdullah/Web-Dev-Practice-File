let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
//  alert("I was clicked. Yayy!!") 
document.querySelector(".box").innerHTML ="<b> yayy you were clicked</b>"
})
button.addEventListener("contextmenu", ()=>{
 alert("dont hack us!!") 
})