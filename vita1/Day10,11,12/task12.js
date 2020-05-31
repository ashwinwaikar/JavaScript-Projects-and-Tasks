// • Create three check boxes showing book name and price. 
// Create a text box. As per selection of check box , text box should show total of selected price.
console.log("this is task 12");
function Total() {
    let book = document.getElementsByName("book");
    console.log(book)
    var price = 0;
    for (let i = 0; i < book.length; i++) {
        if (book[i].checked) {
            price = parseFloat(book[i].value) + parseFloat(price);
        }
        document.getElementById("textbox").value = price + " Rs Only";
    }
}