// • Create a text box and two buttons ‘create cookie and read cookie.’ 
// When user enters data in a text box and clicks on button create cookie it should store data in cookie. 
// When user clicks on button read cookie it should display cookie data on the page.

console.log("this is task 4");



function WriteCookie() {
    if (document.myform.customer.value == "") {
        alert("Enter some value!");
        return;
    }
    cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name " + " = " + cookievalue;
    document.getElementById("2").innerHTML = ("<b>" + "Created Cookie : " + "name =" + " " + cookievalue + "</b>");
}

function ReadCookie() {
    var allcookies = document.cookie;
    document.getElementById("2").innerHTML = ("Created Cookies : " + " " + allcookies);

    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');

    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        document.getElementById("2").innerHTML = ("<b>" + "Created Cookies : " + " " + allcookies +
            "<br/>" + "<br/>" + " Where, " + " Key is : " + name + " and Value is : " + value + "</b>");
    }
}