console.log("this is project 4");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validusername = false;
let validemail = false;
let validphone = false;
$("#failure").hide();
$("#success").hide();

// console.log(name,email,phone);

name.addEventListener("blur", () => {
    // console.log("name is blured");
    //validate Name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,15}$/; //eg-AshwinWaikar1009
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your name is valid");
        name.classList.remove("is-invalid");
        validusername = true;
    }
    else {
        console.log("your name is invalid");
        name.classList.add("is-invalid");
        validusername = false;

    }
})

email.addEventListener("blur", () => {
    console.log("email is blured");
    //validate email here
    let regex = /^([_\-\.0-9a-z]+)@([_\-0-9a-z]+)\.{1}([a-zA-Z]){2,7}$/;//eg ashwin_wai-kar@gma-i_l1.coM
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your email is valid");
        email.classList.remove("is-invalid");
        validemail = true;
    }
    else {
        console.log("your email is invalid");
        email.classList.add("is-invalid");
        validemail = false;
    }
})

phone.addEventListener("blur", () => {
    console.log("phone is blured");
    //validate Phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your phone is valid");
        phone.classList.remove("is-invalid");
        validphone = true;
    }
    else {
        console.log("your phone is invalid");
        phone.classList.add("is-invalid");
        validphone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("you clicked on submit");
    console.log(validusername, validemail, validphone)
    //submit you form here
    if (validusername && validemail && validphone) {
        console.log("username,email and phone are valid...submitting the form");
        let success = document.getElementById("success");
        success.classList.add("show");
        // let failure = document.getElementById("failure");
        // failure.classList.remove("show");
        $("#failure").hide();
        $("#success").show();
    }
    else {
        console.log("one of the username,email and phone are invalid...hence not submitting the form");
        let failure = document.getElementById("failure");
        failure.classList.add("show");
        // let success = document.getElementById("success");   
        // success.classList.remove("show");
        $("#success").hide();
        $("#failure").show();
    }

})