let name = document.getElementsByTagName("h1")[0];
name.innerText = "ASHWIN WAIKAR";
let button = document.getElementById("button");

button.addEventListener("click", function () {
    name.style.textAlign = "right";
})
