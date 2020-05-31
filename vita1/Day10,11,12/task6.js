// • Create three text boxes and two radio buttons showing value “add” and “subtract”. Let user enter number
//  in two text boxes and as per the selected radio button it should display result in the 3rd text box.

let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
let textbox3 = document.getElementById("textbox3");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");

radio1.addEventListener("click", function () {
    textbox3.value = parseFloat(textbox1.value) + parseFloat(textbox2.value);
})

radio2.addEventListener("click", function () {
    textbox3.value = parseFloat(textbox1.value) - parseFloat(textbox2.value);

})