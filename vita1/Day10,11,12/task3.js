// • Write your name in p tag with background colour blue and text in white colour , 
// on button click it should reverse the colour ie. Text colour blue and background colour white

ptag = document.getElementById("ptag");
let button = document.getElementById("button");
button.addEventListener("click", function () {
    ptag.style.backgroundColor = "white";
    ptag.style.color = "blue";

})