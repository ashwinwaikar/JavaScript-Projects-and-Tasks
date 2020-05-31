// • Write at least 3 paragraph about yourself. Create a button on click it should count number of p tags 
// used in document. Also give blue background colour to all p tags.

let ptag = document.getElementsByTagName("p");
function count() {
    document.getElementById("htag").innerHTML = ptag.length;
    for (let i = 0; i < ptag.length; i++) {
        ptag[i].style.background = "blue";

    }
}