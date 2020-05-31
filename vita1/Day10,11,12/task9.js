// • Create a textbox ,and a span tag,  on change event on text box it should display data entered in text box in 
// span tag which is next to it text box.

function Display() {
    let textbox = document.getElementById("textbox");
    let spantag = document.getElementById("spantag");
    spantag.innerText = textbox.value;
}