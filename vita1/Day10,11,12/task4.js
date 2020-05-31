// • Create three radio buttons which show names of colour. Create a text box. 
// Let user enter name in text box and select radio button ,
// on clicking the text in a text box should get respective colour.

let text = document.getElementById("text");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

// text.addEventListener("click", function () {
//     console.log(button1);
//     if (button1.checked == true) {
//         text.style.color = button1.style.color;
//     }

//     else if (button2.checked == true) {
//         text.style.color = button2.style.color;
//     }

//     else if (button3.checked == true) {
//         text.style.color = button3.style.color;
//     }

// })

//OR
function myFunction(value) {
    var change = document.getElementById("text").style.color;
    switch (value) {
        case 'o':
            change = "orange";
            break;
        case 'r':
            change = "red";
            break;
        case 'g':
            change = "green";
            break;
    }
    document.getElementById("text").style.color = change;
}