// • Write your friends name using OL tag. Create a button whose job is to delete the topmost name from the OL tag.
function remove() {
    let orderedlist = document.getElementById("orderedlist");

    let firstnode = orderedlist.childNodes[0];
    orderedlist.removeChild(firstnode);
}