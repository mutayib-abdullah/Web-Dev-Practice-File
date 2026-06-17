console.log("mutayib");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);
// boxes[2].style.background="red"
// document.getElementById("redbox").style.backgroundColor="red"
// document.querySelector(".box").style.backgroundColor="green";
// console.log(document.querySelector(".box"));
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="green";
})