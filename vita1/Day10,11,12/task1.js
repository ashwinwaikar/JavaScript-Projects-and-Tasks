// TASK 1 Write your name in red colour,on a button click it should change the text colour to blue

console.log("this is task 1");

let name = document.getElementById("name");
name.innerHTML = `<b>ASHWIN</b>`
let button = document.getElementById("button");

// button.addEventListener("click",function(){
//     name.style.color="blue";
// })

//OR

button.addEventListener("click", () => {
    name.style.color = "blue";
})

