let minus = document.getElementById("minus");
let span = document.getElementById("span");
let plusBtn = document.getElementById("plusBtn");
let inputColor = document.getElementById("inputColor");

let body = document.body;
let counterBox = document.getElementById("counterBox");
let counterEl = document.getElementById("span"); 


sendBtn.addEventListener("click", ()=> {
    span.textContent = inputNumber.value;
})


plusBtn.addEventListener('click', ()=>{
    span.textContent = Number(span.textContent) + 1;
})

minus.addEventListener('click', ()=>{
    span.textContent = Number(span.textContent) - 1;
})


inputColor.addEventListener('input', ()=> {
    span.style.color = inputColor.value;
})


body.style.backgroundColor = "red";
body.style.color = "black"; 
body.style.fontFamily = "Arial";
body.style.height = "155vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.gap = "42px";