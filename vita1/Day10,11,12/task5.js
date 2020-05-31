// • Create a dropdown box showing the number 1 to 10. Write your name 
// in p tag let user select option from dropdown and that font size should be applied to the data in p tag
function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("op").style.fontSize = listValue;
}