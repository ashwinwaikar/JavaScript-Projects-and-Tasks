console.log("this is calculator");

let screen = document.getElementById("screen");

let buttons = document.getElementsByTagName("button");
//OR
// let buttons = document.querySelectorAll("button");

let screenValue = "";

for (key of buttons) {
    key.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == "X") {
            buttonText = "*";
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
            console.log(buttonText);
        }
        else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
        else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue
        }
    })
}