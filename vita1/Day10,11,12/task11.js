// • Create text box and a span tag  ask user to enter password . Rule for password is
// o It must have at least one capital character
// o It must have at least one digit
// o It must have at least 1 special symbol
// On change event it should display appropriate error message
// For example if user enters “Vita” error should be "please use one digit  use one symbol."

console.log("this is task 11");
let text = document.getElementById("text");
let spantag = document.getElementById("spantag");
let str = text.value;
let capital = false;
let digit = false;
let symbol = false;
let warning = "";


text.addEventListener("blur", function (e) {
    e.preventDefault();
    console.log("event gets fired");

    // o It must have at least one capital character
    let regexp1 = /([A-Z])/;
    if (regexp1.test(str)) {
        console.log("have capital letter");
        capital = true;
    } else {
        capital = false;

    }

    // o It must have at least one digit
    let regexp2 = /([0-9])/;
    if (regexp2.test(str)) {
        console.log("have at least 1 digit");
        digit = true;
    } else {
        digit = false;

    }

    // o It must have at least 1 special symbol
    let regexp3 = /[@#\$\%!\#\^\&\*]/;
    if (regexp3.test(str)) {
        console.log("have at least 1 special symbol");
        symbol = true;
    } else {
        symbol = false;
    }

    if (!capital) {
        warning += "<br/></br>Must have at least one capital letter<br/>";
    }

    if (!digit) {
        warning += "<br/></br>Must have at least one digit<br/>";
    }

    if (!symbol) {
        warning += "<br/></br>Must have at least one symbol<br/>";
    }
    console.log(capital, digit, symbol)
    if (capital && digit && symbol) {
        spantag.innerText = text.value;
    } else {
        document.getElementById("spantag").innerHTML = warning;
    }

})