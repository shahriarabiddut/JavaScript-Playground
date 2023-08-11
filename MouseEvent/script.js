const containerE1 = document.querySelector(".container");
let xev = document.getElementById(".xev");
let yev = document.getElementById(".yev");
window.addEventListener("mousemove",(ev)=>{
    document.getElementById("xev").innerHTML = ev.clientX;
    document.getElementById("yev").innerHTML = ev.clientY;
    console.log(ev.ctrlKey);
});