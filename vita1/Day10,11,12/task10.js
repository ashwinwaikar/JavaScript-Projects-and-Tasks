// • Create text box and a span tag , on change it should give error if user keeps text box empty.
let textbox = document.getElementById("textbox");
let spantag = document.getElementById("spantag");
console.log(textbox.textLength)
function Alertmsg() {
    console.log("fired")
    if (textbox.textLength == 0) {
        spantag.innerText = "Please Enter Something";
    }
}